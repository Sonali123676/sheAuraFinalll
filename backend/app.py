import json
from flask import Flask, request, jsonify
from flask_jwt_extended import (
    create_access_token,
    JWTManager,
    get_jwt,
    get_jwt_identity,
    jwt_required,
    unset_jwt_cookies,
)
from datetime import timedelta, datetime, timezone
from flask_cors import CORS
from models import db, User
from flask_bcrypt import Bcrypt
import streamlit as st
import numpy as np
import pickle

app = Flask(__name__)
CORS(app, supports_credentials=True)
pickled_model = pickle.load(
    open(
        "C:\check1\OvarianAI-Predicting-PCOS-using-artificial-intelligence\modelfinal1.pkl",
        "rb",
    )
)
app.config["SECRET_KEY"] = "sonali-komal"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///backend.db"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)


jwt = JWTManager(app)

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(app)


db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


# # Add your Dialogflow intent handling functions here
def fallback_intent():
    response_text = "I'm sorry, I didn't understand. Can you please rephrase?"
    return jsonify({"fulfillmentText": response_text})


def welcome_intent():
    response_text = "Welcome! How can I assist you today?"
    return jsonify({"fulfillmentText": response_text})


def eat_intent():
    response_text = "We understand the importance of a tailored approach to diet, especially for conditions like PCOS. Our Diet Planner is a valuable tool that provides a personalized diet chart specifically designed for individuals with PCOS. It takes into account nutritional needs and offers suggestions on what to eat and what to avoid during periods."
    return jsonify({"fulfillmentText": response_text})


def end_intent():
    response_text = "Thank you for connecting with SheAura!  Your health and well-being are our priorities. If you have any more questions or need support, don't hesitate to reach out. Wishing you health and happiness on your journey. Thanks again for being a part of SheAura!"
    return jsonify({"fulfillmentText": response_text})


def exerForPeriods():
    response_text = "Yes, we understand that exercising during your period can be challenging. Please refer to our Exercise Guide."
    return jsonify({"fulfillmentText": response_text})


def gynac_intent():
    response_text = "Yes, we understand the significance of comprehensive support, and we're pleased to offer a Gynecological Support feature on our website."
    return jsonify({"fulfillmentText": response_text})


def Home_intent():
    response_text = "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder among women of reproductive age."
    return jsonify({"fulfillmentText": response_text})


def pcosDetect_intent():
    response_text = "While I can provide information and insights based on the data you provide, it's important to note that I am not a diagnostic tool. Our self-diagnosis functionality can offer you some guidance, but it's not a substitute for professional medical advice. PCOS is a complex condition, and an accurate diagnosis requires a comprehensive evaluation by a healthcare professional. If you have concerns about PCOS, I recommend using our self-diagnosis feature and then consulting with a doctor or healthcare provider to discuss your symptoms and get a proper diagnosis."
    return jsonify({"fulfillmentText": response_text})


def track_intent():
    response_text = "Our Periods Tracker feature allows you to log and monitor your menstrual cycle. It's a valuable tool for understanding your cycle's regularity and identifying any changes. Accurate tracking can be helpful when discussing your symptoms with a healthcare provider."
    return jsonify({"fulfillmentText": response_text})


def PCOSPeriod_intent():
    response_text = "PCOS can cause irregular periods, which may manifest as longer cycles or skipped periods. It's important to track your menstrual cycle, and our website offers a Periods Tracker feature to help you monitor changes and understand patterns. If you notice irregularities, consider using self diagnosis functionality and discussing them with a healthcare professional"
    return jsonify({"fulfillmentText": response_text})


def risks_intent():
    response_text = "Risk factors include family history, obesity, and insulin resistance. While these factors may increase the likelihood, PCOS can affect anyone. It's best to discuss your specific situation with a healthcare provider."
    return jsonify({"fulfillmentText": response_text})


def symptoms_intent():
    response_text = "Common symptoms include irregular periods, acne, weight gain, and excessive hair growth. Keep in mind that individual experiences may vary. I recommend using our self-diagnosis feature and then consulting with a doctor or healthcare provider to discuss your symptoms and get a proper diagnosis."
    return jsonify({"fulfillmentText": response_text})


def treat_intent():
    response_text = "The treatment for PCOS is often multifaceted and depends on individual factors. Lifestyle changes, medications, and sometimes assisted reproductive technology may be part of the approach. To support you on this journey, we have a Diet Planner and Exercise Guide feature."
    return jsonify({"fulfillmentText": response_text})


@app.route("/webhook", methods=["GET", "POST"])
def webhook():
    if request.method == "POST":
        try:
            req = request.get_json(force=True)
            intent_name = req["queryResult"]["intent"]["displayName"]
            if intent_name == "Default Fallback Intent":
                return fallback_intent()
            elif intent_name == "Default Welcome Intent":
                return welcome_intent()
            elif intent_name == "eat":
                return eat_intent()
            elif intent_name == "Ending":
                return end_intent()
            elif intent_name == "Exercise for Periods":
                return exerForPeriods()
            elif intent_name == "Gynac support":
                return gynac_intent()
            elif intent_name == "HomePageIntent":
                return Home_intent()
            elif intent_name == "PCOS-detect":
                return pcosDetect_intent()
            elif intent_name == "Period Tracker":
                return track_intent()
            elif intent_name == " Periods relation with pcos":
                return PCOSPeriod_intent()
            elif intent_name == "RiskFactors":
                return risks_intent()
            elif intent_name == "Symptoms":
                return symptoms_intent()
            elif intent_name == "treat":
                return treat_intent()

            print("Received request:", req)

            # Your existing code...

        except Exception as e:
            # Handle errors
            return jsonify({"error": str(e)}), 400

    elif request.method == "GET":
        return "Webhook endpoint. Use POST requests for Dialogflow communication."

    else:
        return jsonify({"error": "Method Not Allowed"}), 405


@app.route("/logintoken", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()

    # if email != "test" or password != "test":
    #     return {"msg": "Wrong email or password"}, 401
    if user is None:
        return jsonify({"error": "Wrong email or passwords"}), 401
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    access_token = create_access_token(identity=email)
    # response = {"access_token": access_token}
    return jsonify({"email": email, "access_token": access_token})


@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    name = request.json["name"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    hashed_pass = bcrypt.generate_password_hash(password)
    new_user = User(name=name, email=email, password=hashed_pass)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"id": new_user.id, "email": new_user.email})


@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response


@app.route("/profile/<getemail>")
@jwt_required()
def my_profile(getemail):
    print(getemail)
    if not getemail:
        return jsonify({"error": "Unauthorized Access"}), 401

    user = User.query.filter_by(email=getemail).first()

    response_body = {
        "id": user.id,
        "name": user.name,
        "email": user.email,
    }

    return response_body


@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    # Remove the JWT token from the client-side (JavaScript)

    return response


@app.route("/predict-pcos", methods=["POST"])
def predict_pcos():
    try:
        # Get the input data from the POST request sent by React
        input_data = request.json  # Ensure that data is sent as JSON

        # Preprocess input data if needed (e.g., convert to a format expected by your model)
        # ...

        # Make predictions using your machine learning model (pickled_model)
        prediction = pickled_model.predict([list(input_data.values())])
        print(prediction)

        # You may return the prediction as a JSON response
        return jsonify({"prediction": int(prediction[0])})

    except Exception as e:
        # Handle errors
        return jsonify({"error": str(e)}), 400
