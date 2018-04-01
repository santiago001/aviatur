<?php

namespace MarcasBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use MarcasBundle\Entity\Marcas;

class DefaultController extends Controller
{
    /**
     *@Route("/", name="marcas_index")
     */
    public function indexAction()
    {
        $marcas=$this->getDoctrine()->getRepository('MarcasBundle:Marcas')->findBy(array('estadoMarca' => '1'));

        if (!count($marcas)){
            $response=array(
                'code'=>1,
                'message'=>'No posts found!',
                'errors'=>null,
                'result'=>null
            );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $data=$this->get('jms_serializer')->serialize($marcas,'json');
        $response=array(

            'code'=>0,
            'message'=>'success',
            'errors'=>null,
            'result'=>json_decode($data)

        );
        return new JsonResponse($response,200);
    }

    /**
     *@Route("/todas", name="marcas_todas")
     */
    public function todasAction()
    {
        $marcas=$this->getDoctrine()->getRepository('MarcasBundle:Marcas')->findAll();

        if (!count($marcas)){
            $response=array(
                'code'=>1,
                'message'=>'No posts found!',
                'errors'=>null,
                'result'=>null
            );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $data=$this->get('jms_serializer')->serialize($marcas,'json');
        $response=array(

            'code'=>0,
            'message'=>'success',
            'errors'=>null,
            'result'=>json_decode($data)

        );
        return new JsonResponse($response,200);
    }

    /**
     *@Route("/create", name="marcas_create")
     */
    public function createAction(Request $request)
    {
        
        $data = json_decode($request->getContent(), true);

        $marca = new Marcas();
        $marca->setNombreMarca($data['nombre']);
        $marca->setReferenciaMarca($data['referencia']);
        $marca->setEstadoMarca('1');
        $marca->setFechaMarca(new \DateTime());

        $em = $this->getDoctrine()->getEntityManager();
        $em->persist($marca);
        $em->flush();

        $response=array(
            'code'=>0,
            'message'=>'Post created!',
            'errors'=>null,
            'result'=>null
        );
        return new JsonResponse($response,201);
    }


    /**
     *@Route("/show/{id}", name="marcas_show")
     */
    public function showAction($id)
    {
        $marcas=$this->getDoctrine()->getRepository('MarcasBundle:Marcas')->find($id);

        if (!count($marcas)){
            $response=array(
                'code'=>1,
                'message'=>'No posts found!',
                'errors'=>null,
                'result'=>null
            );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $data=$this->get('jms_serializer')->serialize($marcas,'json');
        $response=array(
            'code'=>0,
            'message'=>'success',
            'errors'=>null,
            'result'=>json_decode($data)
        );
        return new JsonResponse($response,200);
    }


    /**
     *@Route("/update", name="marcas_update")
     */
    public function updateAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $entityManager = $this->getDoctrine()->getManager();
        $marca = $entityManager->getRepository(Marcas::class)->find($data['idMarca']);

        if (!$marca) {
             $response=array(
                    'code'=>1,
                    'message'=>'No posts found!',
                    'errors'=>null,
                    'result'=>null
                );
                return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $marca->setNombreMarca($data['nombreMarca']);
        $marca->setReferenciaMarca($data['referenciaMarca']);
        $entityManager->flush();

        $response=array(
                'code'=>0,
                'message'=>'Post created!',
                'errors'=>null,
                'result'=>null
        );
        return new JsonResponse($response,201);
    }


    /**
     *@Route("/delete/{id}", name="marcas_delete")
     */
    public function deleteAction($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $marca = $entityManager->getRepository(Marcas::class)->find($id);

        if (!$marca) {
             $response=array(
                    'code'=>1,
                    'message'=>'No posts found!',
                    'errors'=>null,
                    'result'=>null
                );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $marca->setEstadoMarca('0');
        $entityManager->flush();
        $response=array(
                'code'=>0,
                'message'=>'Post created!',
                'errors'=>null,
                'result'=>null
            );
        return new JsonResponse($response,201);
    }        

}
