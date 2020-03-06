<?php
	
	$result="";

	if (isset($_POST['submit'])) {
		require 'phpmailer/PHPMailerAutoload.php';
		$mail = new PHPMailer();

		$mail->Host='smtp.gmail.com';
		$mail->Port=587;
		$mail->SMTPAuth=true;
		$mail->SMTPSecure='tls';
		$mail->Username='studyinszu@gmail.com';
		$mail->Password='Tidza1983';

		$mail->setFrom($_POST['email'],$_POST['name']);
		$mail->addAddress('kanayamaki@outlook.com');
		$mail->addReplyTo($_POST['email'],$_POST['name']);

		$mail->isHTML(true);
		$mail->Subject='Greeting';
		$mail->Body='My name is Motta';

		if (!$mail->send()) {
			$result="Something went wrong. Please try again.";
		}
		else{
			$result="Thanks ".$_POST['name']." for contacting us. We'll get back to you soon!";
		}
	}
?>
