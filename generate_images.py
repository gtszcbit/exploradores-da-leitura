import os
import requests
import json
from pathlib import Path

def generate_image(prompt, filename):
    api_key = os.environ.get("LOVABLE_API_KEY")
    if not api_key:
        print("LOVABLE_API_KEY not found")
        return None
    
    url = "https://api.lovable.dev/v1/ai/images/generations"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "prompt": prompt,
        "n": 1,
        "size": "1024x1024",
        "model": "dall-e-3"
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        image_url = response.json()["data"][0]["url"]
        img_data = requests.get(image_url).content
        output_path = Path("public/images") / filename
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, "wb") as f:
            f.write(img_data)
        return f"/images/{filename}"
    else:
        print(f"Error generating {filename}: {response.text}")
        return None

prompts = {
    "child_studying.jpg": "A realistic photo of a Brazilian child, 5 years old, happy, sitting at a white wooden table in a bright room, focused on doing school activities on printed paper with colorful crayons. High resolution, high quality, soft natural lighting, educational and joyful atmosphere.",
    "interior_1.jpg": "A high-quality realistic 3D mockup of an educational activity page for children about forest animals and letters. Soft colors, clean design, premium aesthetic.",
    "interior_2.jpg": "A high-quality realistic 3D mockup of a children's activity book interior showing phonics exercises with colorful illustrations of objects. Clean white background, professional layout.",
}

results = {}
for filename, prompt in prompts.items():
    path = generate_image(prompt, filename)
    if path:
        results[filename] = path

print(json.dumps(results))
