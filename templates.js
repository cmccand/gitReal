var templates = {};

templates.movieData = [
'<div class="small-2 large-4 columns active">',
'<img src=<%= Poster %> />',
'<h1><%= Title %></h1>',
'<p><%= Year %></p>',
'<p><%= Genre %></p>',
'<p><%= Rated %></p>',
'<p><%= Runtime %></p>',
'<p><%= Director %></p>',
'<p><%= Plot %></p>',
'</div>'

].join('');
