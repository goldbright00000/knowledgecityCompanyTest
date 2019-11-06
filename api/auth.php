<?php

        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        include_once 'config/config.php';
        $res = [];
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
           
            $password =$_POST['password'];
            $password =md5($password);

            $sql = "SELECT * from api_users where username = '".$_POST['username']."' AND password='".$password."'";
            $result = $conn->query($sql);
           
            if($result->num_rows > 0){
                $row = $result->fetch_assoc();
                $_SESSION['user_id'] = $row['id'];
                $res = ['status'=>200, 'message'=>'Authenticated successfully.','data'=>['id'=>$row['id'],'username'=>$row['username']]];
            }else{
                $res = ['status'=>401, 'message'=>'Authentication Error.'];
            }
            echo json_encode($res);
            die();
        }elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            setcookie("user_id", "", time() -1*24*60*60*1000,'/');
            $res=['status'=>200,'message'=>'Successfully logout.'];
            echo json_encode($res);
            die();
        }else{
            $res = ['status'=>400, 'message'=>'Error request.'];
            echo json_encode($res);
            die();
        }