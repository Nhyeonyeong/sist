<%@page import="java.util.List"%>
<%@page import="com.newlecture.jspprj.entity.AnswerisView"%>
<%@page import="com.newlecture.jspprj.dao.AnswerisDao"%>
<%@page import="com.newlecture.jspprj.dao.jdbc.JdbcAnswerisDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>




	
	<main>
		<h2 class="main title">내 오류노트 등록</h2>
		
		<div class="breadcrumb">
			<h3 class="hidden">breadlet</h3>
			<ul>
				<li>home</li>
				<li>커뮤니티</li>
				<li>Answeris</li>
			</ul>
		</div>
				
		<div class="margin-top first">
				<h3 class="hidden">오류 내용</h3>
				<table class="table">
					<tbody>
						<tr>
							<th>제목</th>
							<td class="text-align-left text-indent text-strong text-orange" colspan="3">
								<%-- <%=((AnswerisView)request.getAttribute("answeris")).getTitle()%> --%>
								${answeris.title }
							</td>
						</tr>
						<tr>
							<th>오류가 발생할 때 사용한 언어</th>
							<td colspan="3" class="text-align-left text-indent">
								${answeris.language }		
							</td>							
						</tr>
						<tr>
							<th>오류가 발생할 때 사용한 플랫폼</th>
							<td colspan="3" class="text-align-left text-indent">
								${answeris.platform }		
							</td>							
						</tr>
						<tr>
							<th>오류가 발생할 때 사용한 실행환경</th>
							<td colspan="3" class="text-align-left text-indent">
								${answeris.runtime}
							</td>
						</tr>										
						<tr>
							<th>오류 코드</th>
							<td class="text-align-left text-indent text-strong text-orange" colspan="3">
								${answeris.errorCode}
							</td>
						</tr>
						<tr>
							<th>오류 메시지</th>
							<td class="text-align-left text-indent text-strong text-orange" colspan="3">
								${answeris.errorMessage}
							</td>
						</tr>	
						<tr>
							<th>첨부파일</th>
							<td class="text-align-left text-indent text-strong text-orange" colspan="3">
								<a download href= "../../upload/${answeris.attachedFile}">${answeris.attachedFile}</a>
							</td>
						</tr>
												
						<tr>
							<th colspan="4">오류 상황 설명</th>
						</tr>
						<tr>
							<td colspan="4" class="text-align-left" style="padding:10px 0px 10px 10px;">
								${answeris.situation}
						</tr>
						<tr>
							<th colspan="4">시도해본 내용</th>
						</tr>
						<tr>
							<td colspan="4" class="text-align-left" style="padding:10px 0px 10px 10px;">
								<div>${answeris.triedToFix}</div>
							</td>
						</tr>
						<tr>
							<th colspan="4">원인</th>
						</tr>
						<tr>
							<td class="text-align-left" colspan="4" style="padding:10px 0px 10px 10px;">
								<div>${answeris.reason }</div><div><br></div>서블릿 클래스를 새로 추가할 때 클래스를 복사/붙여넣기로 하면서 클래스명은 다르게 작성되었지만 공교롭게도 매핑된 URL을 다른 이름으로 수정하지 않았음.<div><br></div><div><div>@WebServlet(<b><font color="#ff0000">"/add"</font></b>)</div><div>public class Calc extends HttpServlet{</div></div><div><br></div><div><br></div><div><div>@WebServlet(<b><font color="#ff0000">"/add"</font></b>)</div><div>public class Calc2 extends HttpServlet{</div></div><div><br></div><div>어노테이션은 톰캣의 응용프로그램 설정이므로 어노테이션의 설정이 잘못되면 톰캣 실행에 문제가 발생할 수 있다.</div>"""
							</td>
						</tr>
						
						<tr>
							<th colspan="4">해결방법</th>
						</tr>
						<tr>
							<td class="text-align-left" colspan="4" style="padding:10px 0px 10px 10px;">
								${answeris.howToFix }
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="margin-top text-align-center">				
				<a class="btn-text btn-default" href="edit.jsp">수정</a>
				<a class="btn-text btn-cancel" href="list.jsp">취소</a>
			</div>
			
						
	</main>
	