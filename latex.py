from glob import glob
import re

mdfiles = [f for f in glob('content/**/*.md', recursive=True)]

EXCLUDE = []

for fname in mdfiles:
    if fname in EXCLUDE: continue
    print(f'Processing {fname}')
    with open(fname, 'r') as f:
        content = f.read()
    content = re.sub(r'\\\^', r'^', content)
    content = re.sub(r'\^', r'\^', content)
    with open(fname, 'w') as f:
        f.write(content)