import os
from flask import Flask, render_template, redirect, url_for, session

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "dev-secret-change-in-production")


# ----------------------------------------------------
# 1. PUBLIC & AUTHENTICATION ROUTES
# ----------------------------------------------------
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))


# ----------------------------------------------------
# 2. DOCTOR ROUTES
# ----------------------------------------------------
@app.route("/doctor")
@app.route("/doctor/dashboard")
def doctor_dashboard():
    return render_template("doctor/dr_dashboard.html")


@app.route("/doctor/appointments")
def doctor_appointments():
    return render_template("doctor/dr_appoinment.html")


@app.route("/doctor/patients")
def doctor_patients():
    return render_template("doctor/dr_patient.html")


@app.route("/doctor/prescriptions")
def doctor_prescriptions():
    return render_template("doctor/dr_prescription.html")


# ----------------------------------------------------
# 3. PATIENT ROUTES
# ----------------------------------------------------
@app.route("/patient")
@app.route("/patient/dashboard")
def patient_dashboard():
    return render_template("patient/dashboard.html")


@app.route("/patient/doctors")
def patient_doctors():
    return render_template("patient/doctors.html")


@app.route("/patient/appointments")
def patient_appointments():
    return render_template("patient/appointments.html")


@app.route("/patient/prescriptions")
def patient_prescriptions():
    return render_template("patient/prescriptions.html")


if __name__ == "__main__":
    app.run(debug=True)