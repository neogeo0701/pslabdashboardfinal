import os

with open('index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

with open('script.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

py_content = f'''import os

html_content = """{html_content}"""

js_content = """{js_content}"""

output_dir = r"c:\\Users\\tofht\\.gemini\\antigravity\\scratch\\pslab-박정은"
os.makedirs(output_dir, exist_ok=True)

with open(os.path.join(output_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

with open(os.path.join(output_dir, "script.js"), "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Files completely updated in {{output_dir}}")
'''

with open('update_park.py', 'w', encoding='utf-8') as f:
    f.write(py_content)
