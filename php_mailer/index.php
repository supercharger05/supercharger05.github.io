<?php
	
	$result="";

	if (isset($_POST['submit'])) {
		require 'phpmailer/PHPMailerAutoload.php';
		$mail = new PHPMailer;

		//$mail->isSMTP();
		$mail->Host='smtp.gmail.com';
		$mail->Port=587;
		$mail->SMTPAuth=true;
		$mail->SMTPSecure='tls';
		
		$mail->Username='studyinszu@gmail.com';
		$mail->Password='Tidza1983';

		$mail->setFrom('studyinszu@gmail.com','Berdi');
		$mail->addAddress('kanayamaki@outlook.com');
		$mail->addReplyTo('studyinszu@gmail.com');

		$mail->isHTML(true);
		$mail->Subject='PHP Mailer Subject';
		$mail->Body='<h1 align=center>Subscribe My Chaneel</h1><br><h4 align=center>Like this Video</h4>';

		if (!$mail->send()) {
			echo "Message could not be sent";
		}
		else{
			echo "Message has been sent!";
		}
	}
?>
