<?php

namespace ProductosBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Productos
 *
 * @ORM\Table(name="productos")
 * @ORM\Entity(repositoryClass="ProductosBundle\Repository\ProductosRepository")
 */
class Productos
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nombreProducto", type="string", length=100)
     */
    private $nombreProducto;

    /**
     * @var int
     *
     * @ORM\Column(name="marcaProducto", type="integer")
     */
    private $marcaProducto;

    /**
     * @var string
     *
     * @ORM\Column(name="observacionProducto", type="string", length=200)
     */
    private $observacionProducto;

    /**
     * @var int
     *
     * @ORM\Column(name="cantidadProducto", type="integer")
     */
    private $cantidadProducto;

    /**
     * @var int
     *
     * @ORM\Column(name="estadoProducto", type="integer")
     */
    private $estadoProducto;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fechaProducto", type="datetimetz")
     */
    private $fechaProducto;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nombreProducto
     *
     * @param string $nombreProducto
     *
     * @return Productos
     */
    public function setNombreProducto($nombreProducto)
    {
        $this->nombreProducto = $nombreProducto;

        return $this;
    }

    /**
     * Get nombreProducto
     *
     * @return string
     */
    public function getNombreProducto()
    {
        return $this->nombreProducto;
    }

    /**
     * Set marcaProducto
     *
     * @param integer $marcaProducto
     *
     * @return Productos
     */
    public function setMarcaProducto($marcaProducto)
    {
        $this->marcaProducto = $marcaProducto;

        return $this;
    }

    /**
     * Get marcaProducto
     *
     * @return int
     */
    public function getMarcaProducto()
    {
        return $this->marcaProducto;
    }

    /**
     * Set observacionProducto
     *
     * @param string $observacionProducto
     *
     * @return Productos
     */
    public function setObservacionProducto($observacionProducto)
    {
        $this->observacionProducto = $observacionProducto;

        return $this;
    }

    /**
     * Get observacionProducto
     *
     * @return string
     */
    public function getObservacionProducto()
    {
        return $this->observacionProducto;
    }

    /**
     * Set cantidadProducto
     *
     * @param integer $cantidadProducto
     *
     * @return Productos
     */
    public function setCantidadProducto($cantidadProducto)
    {
        $this->cantidadProducto = $cantidadProducto;

        return $this;
    }

    /**
     * Get cantidadProducto
     *
     * @return int
     */
    public function getCantidadProducto()
    {
        return $this->cantidadProducto;
    }

    /**
     * Set estadoProducto
     *
     * @param integer $estadoProducto
     *
     * @return Productos
     */
    public function setEstadoProducto($estadoProducto)
    {
        $this->estadoProducto = $estadoProducto;

        return $this;
    }

    /**
     * Get estadoProducto
     *
     * @return int
     */
    public function getEstadoProducto()
    {
        return $this->estadoProducto;
    }

    /**
     * Set fechaProducto
     *
     * @param \DateTime $fechaProducto
     *
     * @return Productos
     */
    public function setFechaProducto($fechaProducto)
    {
        $this->fechaProducto = $fechaProducto;

        return $this;
    }

    /**
     * Get fechaProducto
     *
     * @return \DateTime
     */
    public function getFechaProducto()
    {
        return $this->fechaProducto;
    }
}

