from PIL import Image

def expand_image(input_path: str, output_path: str):
    img = Image.open(input_path)

    # Simulação de expansão (borda branca)
    new_img = Image.new("RGB", (img.width + 200, img.height + 200), (240, 240, 240))
    new_img.paste(img, (100, 100))

    new_img.save(output_path)
