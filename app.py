from flask import Flask, render_template, request
from flask_wtf import CSRFProtect

app = Flask(__name__)
#CSRF Token, if you don't now how can it work, go to  https://www.geeksforgeeks.org/csrf-protection-in-flask/z
app.secret_key = b'_53oi3uriq9pifpff;apl'
csrf = CSRFProtect(app)


@app.route("/", methods=['GET', 'POST'])
def main_page():
    return render_template("main.html", request_path=request.path)




if __name__ == '__main__':
    app.run(debug=True)