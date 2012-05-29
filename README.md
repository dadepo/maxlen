*Maxlen Jquery Plugin*

Maxlen Jquery Plugin is a simple Jquery plugin that makes you easily limit the number of character that user can write in a field and stating either how many character has been used or how many character is left (think twitter input element)

Maxlen Jquery Plugin works with both Textarea field and the Input type text HTML element


*Including Maxlen Jquery Plugin in your Application*

Maxlen Jquery Plugin is a Jquery plugin. 
For it to work, Jquery must be included in your project. 
You can always grab a copy of Jquery from Jquery.com.

Include Jquery and then include the maxlen.js script after.

This version 0.0.1 of Maxlen Jquery Plugin has been tested with Jquery v1.7.2
and Chrome 19.0.1084.52, Firefox 12.0 and Safari 5.1.5

*How It Works*
Maxlen Jquery Plugin can be used on either Textarea element or Input[type=text]
Once the Plugin is activated for the desired field, the number of characters entered
would then be limited based on supplied settings. The default character allowed is 160 which can easily be changed.

The useful part of the Maxlen Jquery Plugin is the feedback it gives users as they type.
The Plugin has two options of showing this. It can either show how many characters has been used or how many character are remaining before the stipulated limit is reached.

To activate the plugin on a TEXTAREA with an ID of "feedback":

<script type='text/javascript'>
$(document).ready(function()
{
$('textarea#feedback').maxlen();

}
);
</script>

This would use the default values and limit allowed characters to 160.

Maxlen Jquery Plugin can be used on more than one element at the same time. So the following code would work

<script type='text/javascript'>
$(document).ready(function()
{
$('textarea,input').maxlen();

}
);
</script>

or

<script type='text/javascript'>
$(document).ready(function()
{
$('textarea').maxlen();
$('input').maxlen();
}
);
</script>

Note that even though the type of Input is not specified, the plugin would only take effect on input[type=text]

*Plugin Options*

The full options for the plugin is

$('textarea').maxlen({
      'limit' : 160,
      'order' : 'desc',
      'class' : 'maxlen_class',
      'position' : 'above'
    });

Limit states the limit of character allowed. Default is 160
Order states whether the plugin would show how much character has been used in the limit specified or how much is remaining.
The allowed options are 'desc' and 'asc'. 'desc' shows remaining characters, 'asc' shows used characters. The default is 'desc'
class states the class name for the indicator showing the characters. The default is maxlen_class. You can change this to whatever string you want. Use this class name to style the indicator.
position states where the indicator should be placed, whether above the input element or below. The allowed options are 'above' and 'below'
The default is 'above'

*Styling*

The indicator that shows the character remaining or used up is a <p> element with a default class name of 'maxlen_class'
You can change the class name via the options or leave it with the default and include your CSS to change the look and feel.

When the limit of the character is reached, a class name of "limit" is automatically appended to the <p> element so you can easily change the appearance whenever the limit is reached.
for example placing this in your project 

<style type="text/css">
.limit
{
color:red;
}
</style>

would automatically change the color to red when the limit is reached.
