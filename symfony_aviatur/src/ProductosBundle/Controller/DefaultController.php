<?php

namespace ProductosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use ProductosBundle\Entity\Productos;


class DefaultController extends Controller
{
    /**
     *@Route("/", name="productos_index")
    */
    public function indexAction()
    {
        $productos=$this->getDoctrine()->getRepository('ProductosBundle:Productos')->findBy(array('estadoProducto' => '1'));

        if (!count($productos)){
            $response=array(
                'code'=>1,
                'message'=>'No posts found!',
                'errors'=>null,
                'result'=>null
            );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $data=$this->get('jms_serializer')->serialize($productos,'json');
        $response=array(

            'code'=>0,
            'message'=>'success',
            'errors'=>null,
            'result'=>json_decode($data)

        );
        return new JsonResponse($response,200);
    }


    /**
     *@Route("/create", name="productos_create")
     */
    public function createAction(Request $request)
    {
        
        $data = json_decode($request->getContent(), true);

        $producto = new Productos();
        $producto->setNombreProducto($data['nombre']);
        $producto->setMarcaProducto($data['marca']);
        $producto->setObservacionProducto($data['observacion']);
        $producto->setCantidadProducto($data['cantidad']);
        $producto->setEstadoProducto('1');
        $producto->setFechaProducto(new \DateTime());

        $em = $this->getDoctrine()->getEntityManager();
        $em->persist($producto);
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
     *@Route("/show/{id}", name="productos_show")
     */
    public function showAction($id)
    {
        $productos=$this->getDoctrine()->getRepository('ProductosBundle:Productos')->find($id);

        if (!count($productos)){
            $response=array(
                'code'=>1,
                'message'=>'No posts found!',
                'errors'=>null,
                'result'=>null
            );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $data=$this->get('jms_serializer')->serialize($productos,'json');
        $response=array(
            'code'=>0,
            'message'=>'success',
            'errors'=>null,
            'result'=>json_decode($data)
        );
        return new JsonResponse($response,200);
    }


    /**
     *@Route("/update", name="productos_update")
     */
    public function updateAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $entityManager = $this->getDoctrine()->getManager();
        $producto = $entityManager->getRepository(Productos::class)->find($data['id']);

        if (!$producto) {
             $response=array(
                    'code'=>1,
                    'message'=>'No posts found!',
                    'errors'=>null,
                    'result'=>null
                );
                return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $producto->setNombreProducto($data['nombreProducto']);
        $producto->setMarcaProducto($data['marcaProducto']);
        $producto->setObservacionProducto($data['observacionProducto']);
        $producto->setCantidadProducto($data['cantidadProducto']);
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
     *@Route("/delete/{id}", name="productos_delete")
     */
    public function deleteAction($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $producto = $entityManager->getRepository(Productos::class)->find($id);

        if (!$producto) {
             $response=array(
                    'code'=>1,
                    'message'=>'No posts found!',
                    'errors'=>null,
                    'result'=>null
                );
            return new JsonResponse($response, Response::HTTP_NOT_FOUND);
        }

        $producto->setEstadoProducto('0');
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
