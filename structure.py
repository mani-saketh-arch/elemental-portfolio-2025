import os

# Define the folder and file structure
structure = {
    "portfolio-phoenix": {
        "public": {
            "videos": [
                "phoenix-intro.mp4",
                "title-card.jpg"
            ],
            "images": {
                "projects": [
                    "campus-bridge.png",
                    "venue-management.png",
                    "mediscan.png",
                    "sleep-disorder.png"
                ],
                "icons": [
                    "phoenix-logo.svg"
                ],
                "files": [
                    "profile.jpg"
                ]
            },
            "files": [
                "resume.pdf"
            ]
        },
        "src": {
            "app": [
                "layout.js",
                "page.js",
                "globals.css",
                "favicon.ico"
            ],
            "components": {
                "intro": [
                    "IntroLoader.jsx",
                    "SkipButton.jsx"
                ],
                "sections": [
                    "Hero.jsx",
                    "About.jsx",
                    "Skills.jsx",
                    "Experience.jsx",
                    "Projects.jsx",
                    "Research.jsx",
                    "Contact.jsx"
                ],
                "particles": [
                    "WaterParticles.jsx",
                    "FireParticles.jsx",
                    "LightningParticles.jsx",
                    "IceParticles.jsx"
                ],
                "ui": [
                    "Button.jsx",
                    "Card.jsx",
                    "SectionTransition.jsx",
                    "SkillNode.jsx"
                ],
                "layout": [
                    "Navigation.jsx",
                    "Footer.jsx"
                ]
            },
            "lib": [
                "cookies.js",
                "utils.js",
                "constants.js"
            ],
            "styles": [
                "animations.css"
            ]
        },
        "files": [
            ".env.local",
            ".gitignore",
            "next.config.js",
            "tailwind.config.js",
            "postcss.config.js",
            "package.json",
            "jsconfig.json",
            "README.md"
        ]
    }
}

def create_structure(base_path, struct):
    """Recursively create folders and files from the structure dict"""
    for key, value in struct.items():
        folder_path = os.path.join(base_path, key)
        os.makedirs(folder_path, exist_ok=True)

        if isinstance(value, dict):  # Subfolders
            create_structure(folder_path, value)

        elif isinstance(value, list):  # Files in this folder
            for item in value:
                file_path = os.path.join(folder_path, item)
                if not os.path.exists(file_path):
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write("")  # Create empty file

if __name__ == "__main__":
    base_dir = os.getcwd()  # Create in current directory
    create_structure(base_dir, structure)
    print("✅ Portfolio-Phoenix project structure created!")
