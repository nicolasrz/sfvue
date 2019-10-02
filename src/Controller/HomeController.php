<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use App\Controller\FuUser;

class HomeController extends Controller
{
    /**
     * @Route("/")
     */
    public function
    default()
    {
        $person = ['firstname' => 'Nicolas', 'lastname' => 'Ruiz', 'description' => 'Un petit bonhomme'];


        return $this->render('base.html.twig', ['person' => $person]);
    }
}
