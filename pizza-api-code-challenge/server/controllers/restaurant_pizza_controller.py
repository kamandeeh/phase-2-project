from flask import Blueprint, jsonify, request
from server.app import db
from server.models.restaurant_pizza import RestaurantPizza
from server.models.restaurant import Restaurant
from server.models.pizza import Pizza

restaurant_pizza_bp = Blueprint("restaurant_pizzas", __name__, url_prefix="/restaurant_pizzas")

@restaurant_pizza_bp.route("/", methods=["POST"])
def create_restaurant_pizza():
    data = request.get_json()
    price = data.get("price")
    pizza_id = data.get("pizza_id")
    restaurant_id = data.get("restaurant_id")

    if not (1 <= price <= 30):
        return jsonify({"errors": ["Price must be between 1 and 30"]}), 400

    try:
        restaurant_pizza = RestaurantPizza(
            price=price,
            pizza_id=pizza_id,
            restaurant_id=restaurant_id
        )
        db.session.add(restaurant_pizza)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"errors": [str(e)]}), 400

    return jsonify({
        "id": restaurant_pizza.id,
        "price": restaurant_pizza.price,
        "pizza_id": pizza_id,
        "restaurant_id": restaurant_id,
        "pizza": {
            "id": restaurant_pizza.pizza.id,
            "name": restaurant_pizza.pizza.name,
            "ingredients": restaurant_pizza.pizza.ingredients
        },
        "restaurant": {
            "id": restaurant_pizza.restaurant.id,
            "name": restaurant_pizza.restaurant.name,
            "address": restaurant_pizza.restaurant.address
        }
    }), 201
