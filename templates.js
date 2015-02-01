var templates = {};

templates.movieData = [

'<div class="resultBox active">',
'<img src=<%= Poster %> />',
'<h1><%= Title %></h1>',
'<p><%= Year %></p>',
'<p><%= Genre %></p>',
'<p><%= Rated %></p>',
'<p><%= Runtime %></p>',
'<p><%= Director %></p>',
'<p><%= Plot %></p>',
'<a href=<%= Watch %>>Watch</a>',
'</div>'


].join('');
