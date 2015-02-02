var templates = {};

templates.movieData = [

'<div class="resultBox active">',
'<img src=<%= Poster %> />'
'<div class="resultText">',
'<h5><%= Title %></h1>',
'<img src=<%= Poster %> />',
'<p><%= Year %></p>',
'<p><%= Genre %></p>',
'<p><%= Rated %></p>',
'<p><%= Runtime %></p>',
'<p><%= Director %></p>',
'<p><%= Plot %></p>',
'</div>',
'</div>'


].join('');
