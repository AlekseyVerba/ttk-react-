<?php 
require('./mailer/PHPMailerAutoload.php'); 
$_POST = json_decode(file_get_contents('php://input'), true);
    var_dump($_POST);


        global $email_from; 
        global $email_to; 
        $mail = new PHPMailer; 
        $mail->setFrom($email_from, 'Заявка с сайта');
        $mail->addAddress($email_to); 
        $mail->addAddress("test@t-code.ru");
        $mail->IsHTML(true); 
        $mail->CharSet = 'UTF-8'; 
      
        $form = $_POST['form']; 
      
        $mail->Subject = 'Письмо с сайта'; 
        $echo = "Ваше сообщение отправлено"; 
      
        $mail->Body = ''; 
      
      
        foreach($form as $data){ 
          switch($data['name']){ 
      
            case 'form_title': 
            $mail->Body .= 'Отправлена с формы: '.$data['value'].'<br>'; 
            break;
            case 'service_name-0': 
              $mail->Body .= 'Сервис 1 тарифа: '.$data['value'].'<br>'; 
              break; 
      
            case 'rates_name-0':
              $mail->Body .= 'Категория 1 тарифа: '.$data['value'].'<br>'; 
              break;
    
              // priceCard
            case 'name_card-0':
              $mail->Body .= 'Название 1 тарифа: '.$data['value'].'<br><br><br>'; 
              break;
      
            case 'price_card-0': 
              $mail->Body .= 'Цена 1 тарифа: '.$data['value'].'<br>'; 
              break;




              case 'service_name-1': 
                $mail->Body .= 'Сервис 2 тарифа: '.$data['value'].'<br>'; 
                break; 
        
              case 'rates_name-1':
                $mail->Body .= 'Категория 2 тарифа: '.$data['value'].'<br>'; 
                break;
                // priceCard
              case 'name_card-1':
                $mail->Body .= 'Название 2 тарифа: '.$data['value'].'<br><br><br>'; 
                break;
        
              case 'price_card-1': 
                $mail->Body .= 'Цена 2 тарифа: '.$data['value'].'<br>'; 
                break;






                case 'service_name-2': 
                    $mail->Body .= 'Сервис 3 тарифа: '.$data['value'].'<br>'; 
                    break; 
            
                  case 'rates_name-2':
                    $mail->Body .= 'Категория 3 тарифа: '.$data['value'].'<br>'; 
                    break;
                    // priceCard
                  case 'name_card-2':
                    $mail->Body .= 'Название 3 тарифа: '.$data['value'].'<br><br><br>'; 
                    break;
            
                  case 'price_card-2': 
                    $mail->Body .= 'Цена 3 тарифа: '.$data['value'].'<br>'; 
                    break;



                    case 'service_name-3': 
                        $mail->Body .= 'Сервис 4 тарифа: '.$data['value'].'<br>'; 
                        break; 
                
                      case 'rates_name-3':
                        $mail->Body .= 'Категория 4 тарифа: '.$data['value'].'<br>'; 
                        break;
                        // priceCard
                      case 'name_card-3':
                        $mail->Body .= 'Название 4 тарифа: '.$data['value'].'<br><br><br>'; 
                        break;
                
                      case 'price_card-3': 
                        $mail->Body .= 'Цена 4 тарифа: '.$data['value'].'<br>'; 
                        break;


                


                    case 'name': 
                        $mail->Body .= 'Имя: '.$data['value'].'<br>'; 
                        break;
                    case 'mail': 
                        $mail->Body .= 'Почта: '.$data['value'].'<br>'; 
                        break;

                    case 'addres': 
                        $mail->Body .= 'Адрес: '.$data['value'].'<br>'; 
                        break;

                    case 'comment': 
                        $mail->Body .= 'Комментарий: '.$data['value'].'<br>'; 
                        break;                        

                    


      
          
      
            }
      
        } 
      
        $mail->Send(); 
      
        echo $echo; 
      
      