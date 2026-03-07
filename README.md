# Background Remover
An AI-powered web application that automatically removes backgrounds from images. Built with a FastAPI backend and a Vanilla JS frontend.

## Tools Used
- **FastAPI**: The web framework used to build the API endpoints.
- **Uvicorn:** The ASGI server used to run the FastAPI application.
- **rembg:** The AI library responsible for the actual background removal.
- **Pillow (PIL):** Used for opening and saving different image formats.
- **onnxruntime:** The engine that runs the AI models efficiently.
- **python-multipart:** Required to handle image file uploads through the API.

## How to Run Locally
### Backend Setup
1. Move into the backend folder:
```
cd backend
```
2. Create the virtual environment:
```
python -m venv env
```
3. Activate the environment:
macOS or Linux:
```
source env/bin/activate
```
Windows:
```
env\Scripts\activate
```
4. Install the dependencies from the requirements file:
```
pip install -r requirements.txt
```
5. Start the server:
```
uvicorn main:app --reload
```

### Frontend Setup
1. Open the frontend/ folder.
2. Open index.html in your browser.
3. Ensure your app.js is configured to send requests to http://localhost:8000/remove-bg.
