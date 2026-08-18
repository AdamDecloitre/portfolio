from pdfminer.high_level import extract_text
from pathlib import Path
p = Path('doc/Cv_Adam_Decloitre.pdf')
if not p.exists():
    print('PDF not found:', p)
else:
    text = extract_text(str(p))
    out = Path('doc/cv_text.txt')
    out.write_text(text, encoding='utf-8')
    print('Extracted', len(text), 'chars to', out)
    # Print first 2000 chars for quick preview
    print(text[:2000])
