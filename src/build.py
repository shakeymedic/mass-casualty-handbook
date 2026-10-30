# Build the single-file site: python3 build.py
import os
D=os.path.dirname(os.path.abspath(__file__))
t=open(os.path.join(D,'template.html')).read()
t=t.replace('/*__DATA__*/',open(os.path.join(D,'suite_data.js')).read(),1)
t=t.replace('/*__EUROPE__*/',open(os.path.join(D,'europe_data.js')).read(),1)
t=t.replace('/*__LEARN__*/',open(os.path.join(D,'learn_data.js')).read(),1)
assert '/*__' not in t
out=os.path.join(D,'..','index.html')
open(out,'w').write(t); print(out,len(t.encode()),'bytes')
