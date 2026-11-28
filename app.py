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
    return render_template("doctor/dr_appointment.html")


@app.route("/doctor/patients")
def doctor_patients():
    return render_template("doctor/dr_patient.html")


@app.route("/doctor/prescriptions")
def doctor_prescriptions():
    return render_template("doctor/dr_prescription.html")


# Aliases & redirects for legacy or direct .html links
@app.route("/doctor/dashboard.html")
@app.route("/doctor/dr_dashboard.html")
def doctor_dashboard_redirect():
    return redirect(url_for("doctor_dashboard"))


@app.route("/doctor/dr_appointment.html")
@app.route("/doctor/dr_appointments.html")
@app.route("/doctor/appointments.html")
def doctor_appointments_redirect():
    return redirect(url_for("doctor_appointments"))


@app.route("/doctor/dr_patient.html")
@app.route("/doctor/dr_patients.html")
@app.route("/doctor/patients.html")
def doctor_patients_redirect():
    return redirect(url_for("doctor_patients"))


@app.route("/doctor/dr_prescription.html")
@app.route("/doctor/dr_prescriptions.html")
@app.route("/doctor/prescriptions.html")
def doctor_prescriptions_redirect():
    return redirect(url_for("doctor_prescriptions"))


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