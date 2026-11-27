
import os
from flask import Flask, render_template

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(BASE_DIR)

DOCTOR_DIR = os.path.join(PROJECT_DIR, "frontend", "doctor")

app = Flask(
    __name__,
    template_folder=DOCTOR_DIR,
    static_folder=DOCTOR_DIR,
    static_url_path="/static"
)

@app.route("/")
@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


if __name__ == "__main__":
    app.run(debug=True)
