package com.app.dao.implementations;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.interfaces.ITvShowDAO;
import com.app.tvshow.pojos.TVShow;

@Repository
@Transactional
public class TvShowDAO implements ITvShowDAO {

	@Autowired
	private SessionFactory sf;

	@Override
	public void addTVShow(TVShow show) {
		sf.getCurrentSession().saveOrUpdate(show);
	}
}
