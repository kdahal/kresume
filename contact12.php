<?php

/* Set e-mail recipient */

$myemail  = "kumar.dahal@outlook.com";

$subject = 'Contact Form';





/* Check all form inputs using check_input function */

$name1 = check_input($_POST['name1'], "Enter your name");

$email2    = check_input($_POST['email2']);

$comment3 = check_input($_POST['comment3'], "Write your comments");



/* If e-mail is not valid show error message */

if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email2))

{

    show_error("E-mail address not valid");

}





/* Let's prepare the message for the e-mail */

$message = "Hello!



Your contact form has been submitted by:



Name: $name1

E-mail: $email2

Comments: $comment3



End of message

";







/* Send the message using mail() function */

if( mail($myemail, $subject, $message) ){

		echo "success";

	} else {

		echo "The server failed to send the message. Please try again later.";

	}







/* Prepare autoresponder subject */

$respond_subject = "Thank you for contacting us!";



/* Prepare autoresponder message */

$respond_message = "Hello!



Thank you for contacting me! I will get back to you as soon as possible!



Yours sincerely,



Kuamr Dahal








Contact Form:

-------------

Name: $name1

E-mail: $email2

Comments: $comment3

";



/* Send the message using mail() function */

mail($email2, $respond_subject, $respond_message);







/* Functions we used */

function check_input($data, $problem='')

{

    $data = trim($data);

    $data = stripslashes($data);

    $data = htmlspecialchars($data);

    if ($problem && strlen($data) == 0)

    {

        show_error($problem);

    }

    return $data;

}



function show_error($myError)

{

?>

    <html>

    <body>



    <b>Please correct the following error:</b><br />

    <?php echo $myError; ?>



    </body>

    </html>

<?php

exit();

}

?>