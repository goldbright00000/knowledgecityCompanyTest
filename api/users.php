<?php 
    header("Content-Type: application/json; charset=UTF-8");
        
    
    include_once 'config/config.php';
            $res = [];
            $sql = "SELECT * from students";
            $result = $conn->query($sql);
            if($result->num_rows >0){
                $res = ['status'=>200,'data'=>[]];
                while($row = $result->fetch_assoc()) {
                    $res['data'][]=$row;
                }
            }else{
                $res = ['status'=>404,'data'=>[]];
            }

        echo json_encode($res);
        die();

?>