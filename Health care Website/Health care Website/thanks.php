
<?php
/*Here we are going to declare the variables*/
if(isset($_POST['submit']))
{
echo "Thank you For Filling Up the form.Your Comments are important to Us";
 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['query'];
//Save visitor name and entered message into one variable:
$formcontent="VISITOR NAME: $name\\n\\nFEEDBACK: $message";
$recipient = "vikram1369@gmail.com";
$subject = "FeedBack For Health Care Web SIte";
$mailheader = "From: $email\\r\\n";
$mailheader .= "Reply-To: $email\\r\\n";
$mailheader .= "MIME-Version: 1.0\\r\\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Failure!");
}
?>