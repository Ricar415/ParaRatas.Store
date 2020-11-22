#!/home/pararat7/public_html/cgi-bin

print "Content-type:text/html\n"
print "<h1>This is the Home Page</h1>"

for i in range(5):
    print "Item " + str(i) + "<br/>"