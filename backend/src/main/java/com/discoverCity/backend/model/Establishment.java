package com.discoverCity.backend.model;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "estabelecimento")
public class Establishment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "media_nota")
	private double notaMedia;

	@Column(name = "descricao")
	private String descricao;

	@Column(name = "site")
	private String site;

	@Column(name = "imagem")
	private String imagem;

	@Column(name = "inicio_funcionamento")
	private LocalTime inicioFunciomento;

	@Column(name = "fim_funcionamento")
	private LocalTime fimFuncionamento;

	@Column(name = "dias_funcionamento")
	private String diasFunciomento;

	@Column(name = "menu_url")
	private String menuUrl;

	@Column(name = "tipo_pagamento")
	private String tipoPagamento;

	@ManyToOne
	@JoinColumn(name = "id_categoria")
	private Category categoria;

	@OneToMany(mappedBy = "estabelecimento")
	private List<Endereco> endereco = new ArrayList<>();

	@OneToMany(mappedBy = "estabelecimento")
	private List<Avaliacao> avaliacoes = new ArrayList<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getNotaMedia() {
		return notaMedia;
	}

	public void setNotaMedia(double notaMedia) {
		this.notaMedia = notaMedia;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public LocalTime getInicioFunciomento() {
		return inicioFunciomento;
	}

	public void setInicioFunciomento(LocalTime inicioFunciomento) {
		this.inicioFunciomento = inicioFunciomento;
	}

	public LocalTime getFimFuncionamento() {
		return fimFuncionamento;
	}

	public void setFimFuncionamento(LocalTime fimFuncionamento) {
		this.fimFuncionamento = fimFuncionamento;
	}

	public String getDiasFunciomento() {
		return diasFunciomento;
	}

	public void setDiasFunciomento(String diasFunciomento) {
		this.diasFunciomento = diasFunciomento;
	}

	public String getMenuUrl() {
		return menuUrl;
	}

	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public String getTipoPagamento() {
		return tipoPagamento;
	}

	public void setTipoPagamento(String tipoPagamento) {
		this.tipoPagamento = tipoPagamento;
	}

	public Category getCategoria() {
		return categoria;
	}

	public void setCategoria(Category categoria) {
		this.categoria = categoria;
	}

	public List<Endereco> getEndereco() {
		return endereco;
	}

	public void setEndereco(List<Endereco> endereco) {
		this.endereco = endereco;
	}

	public List<Avaliacao> getAvaliacoes() {
		return avaliacoes;
	}

	public void setAvaliacoes(List<Avaliacao> avaliacoes) {
		this.avaliacoes = avaliacoes;
	}
	//	@OneToMany(mappedBy = "estabelecimmento")
//	private List<Cupom> cupons = new ArrayList<>();
	
	
	// public List<Avaliacao> getAvaliacoes() {
//		return avaliacoes;
//	}

	/*
	 * public void setAvaliacoes(List<Avaliacao> avaliacoes) { this.avaliacoes =
	 * avaliacoes; }
	 */

//	public List<Endereco> getEndereco() {
//		return endereco;
//	}

	/*public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}*/
	
//	public List<Cupom> getCupom() {
//		return cupons;
//	}

}
