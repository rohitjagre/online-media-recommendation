package com.app.dao.implementations;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.interfaces.IMovieDAO;
import com.app.movie.pojos.Movie;

@Repository
public class MovieDAO implements IMovieDAO {

	@Autowired
	private SessionFactory sf;

	@Override
	@Transactional
	public boolean storeMovie(Movie movie) {
		sf.getCurrentSession().saveOrUpdate(movie);
		return true;
	}

}
