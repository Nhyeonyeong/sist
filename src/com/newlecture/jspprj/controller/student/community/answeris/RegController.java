package com.newlecture.jspprj.controller.student.community.answeris;

import java.io.File;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.tiles.TilesContainer;
import org.apache.tiles.access.TilesAccess;
import org.apache.tiles.request.ApplicationContext;
import org.apache.tiles.request.servlet.ServletRequest;
import org.apache.tiles.request.servlet.ServletUtil;

import com.newlecture.jspprj.dao.AnswerisDao;
import com.newlecture.jspprj.dao.jdbc.JdbcAnswerisDao;
import com.newlecture.jspprj.entity.Answeris;
import com.newlecture.jspprj.entity.AnswerisView;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;



//요청url
@WebServlet("/student/community/answeris/reg")
@MultipartConfig(
		fileSizeThreshold = 1024*1024,
		maxFileSize = 1024*1024*5,
		maxRequestSize = 1024*1024*5*5)
public class RegController extends HttpServlet{
	
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.getContextPath();
		
		ApplicationContext applicationContext = ServletUtil
				.getApplicationContext(request.getSession().getServletContext());
		TilesContainer container = TilesAccess.getContainer(applicationContext);
		ServletRequest servletRequest = new ServletRequest(applicationContext, request, response);
		container.render("student.community.answeris.reg", servletRequest);
		
	}
	
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 시스템은 이게 뭔지 몰라
		String pathUrl ="/student/upload" ;
		
		String pathSystem = request
								.getServletContext()
								.getRealPath(pathUrl);		
		
		//response.getWriter().println(pathSystem);
						
		System.out.println(pathSystem);
		
		File file = new File(pathSystem);
		
		// 만들고자 하는 디렉토리의 상위 디렉토리가 없으면 상위 디렉토리까지 새로 생성
		if(!file.exists())
			file.mkdirs();
		Answeris answeris= new Answeris();
		
		
		Part part = request.getPart("attached");
		InputStream is = part.getInputStream();
		String fname = part.getSubmittedFileName();
		
		byte[] buf = new byte[1024];
		FileOutputStream fos = new FileOutputStream(pathSystem+File.separator+fname); //저장경로
		
		int size = 0;
		
		while((size=is.read(buf, 0, size))!= -1)
			fos.write(buf,0,size);
		
		is.close();
		fos.close();
		
		answeris.setTitle(request.getParameter("title"));
		answeris.setSituation(request.getParameter("situation"));
		answeris.setAttachedFile(part.getSubmittedFileName());
		
		answeris.setWriterId("hyyyyy");
				
		
		/*AnswerisDao answerisDao = new JdbcAnswerisDao();
		answerisDao.insert(answeris);
		
		response.sendRedirect("list");
		
		//순환자를 제공
		//req.getFileNames();
		
		/*response.getWriter().println(fileName);*/
		/*answeris.setAttachedFile(req.getParameter("attached"));
		
		answeris.setWriterId("hyyyyy");
		

		AnswerisDao answerisDao = new JdbcAnswerisDao();
		answerisDao.insert(answeris);

		response.sendRedirect("list");*/
	}
	/*@Override
	protected void service(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.getPart("");
		request.getParts("");//다중파일
	}*/
}
