<?php

namespace MarcasBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Marcas
 *
 * @ORM\Table(name="marcas")
 * @ORM\Entity(repositoryClass="MarcasBundle\Repository\MarcasRepository")
 */
class Marcas
{
    /**
     * @var int
     *
     * @ORM\Column(name="idMarca", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $idMarca;

    /**
     * @var string
     *
     * @ORM\Column(name="nombreMarca", type="string", length=50)
     */
    private $nombreMarca;

    /**
     * @var int
     *
     * @ORM\Column(name="referenciaMarca", type="integer")
     */
    private $referenciaMarca;

    /**
     * @var int
     *
     * @ORM\Column(name="estadoMarca", type="integer")
     */
    private $estadoMarca;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fechaMarca", type="datetimetz")
     */
    private $fechaMarca;


    /**
     * Get idMarca
     *
     * @return int
     */
    public function getIdMarca()
    {
        return $this->idMarca;
    }

    /**
     * Set nombreMarca
     *
     * @param string $nombreMarca
     *
     * @return Marcas
     */
    public function setNombreMarca($nombreMarca)
    {
        $this->nombreMarca = $nombreMarca;

        return $this;
    }

    /**
     * Get nombreMarca
     *
     * @return string
     */
    public function getNombreMarca()
    {
        return $this->nombreMarca;
    }

    /**
     * Set referenciaMarca
     *
     * @param integer $referenciaMarca
     *
     * @return Marcas
     */
    public function setReferenciaMarca($referenciaMarca)
    {
        $this->referenciaMarca = $referenciaMarca;

        return $this;
    }

    /**
     * Get referenciaMarca
     *
     * @return int
     */
    public function getReferenciaMarca()
    {
        return $this->referenciaMarca;
    }

    /**
     * Set estadoMarca
     *
     * @param integer $estadoMarca
     *
     * @return Marcas
     */
    public function setEstadoMarca($estadoMarca)
    {
        $this->estadoMarca = $estadoMarca;

        return $this;
    }

    /**
     * Get estadoMarca
     *
     * @return int
     */
    public function getEstadoMarca()
    {
        return $this->estadoMarca;
    }

    /**
     * Set fechaMarca
     *
     * @param \DateTime $fechaMarca
     *
     * @return Marcas
     */
    public function setFechaMarca($fechaMarca)
    {
        $this->fechaMarca = $fechaMarca;

        return $this;
    }

    /**
     * Get fechaMarca
     *
     * @return \DateTime
     */
    public function getFechaMarca()
    {
        return $this->fechaMarca;
    }
}

