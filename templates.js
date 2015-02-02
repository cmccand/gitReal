var templates = {};

templates.movieData = [

'<div class="resultBox active">',
'<img src=<%= Poster %> />',
'<div class="resultText">',
'<h5><%= Title %></h5>',
'<h4><%= Title %></h4>',
'<img src=<%= Poster %> />',
'<p><b>Year Released:</b> <%= Year %></p>',
'<p><b>Genre:</b> <%= Genre %></p>',
'<p><b>Rated:</b> <%= Rated %></p>',
'<p><b>Runtime:</b> <%= Runtime %></p>',
'<p><b>Directed By:</b> <%= Director %></p>',
'<h3>Synopsis</h3>',
'<p><%= Plot %></p>',
'</div>'


].join('');
