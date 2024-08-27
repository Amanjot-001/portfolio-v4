import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from 'gatsby';

const Jobs = () => {
	const data = useStaticQuery(graphql`
		query {
		  jobs: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
			sort: { fields: [frontmatter___date], order: DESC }
		  ) {
			edges {
			  node {
				frontmatter {
				  title
				  company
				  location
				  range
				  url
				}
				html
			  }
			}
		  }
		}
	  `);

	const jobsData = data.jobs.edges;

	return (
		<>
			<h2 className="numbered-heading">Where I've Worked</h2>
			<div className="inner">
				{jobsData &&
					jobsData.map(({ node } : any, i : number) => {
						const { company } = node.frontmatter;
						return (
							<button
								key={i}
								id={`tab-${i}`}
							>
								<span>{company}</span>
							</button>
						);
					})}
				{jobsData &&
					jobsData.map(({ node } : any, i : number) => {
						const { frontmatter, html } = node;
						const { title, url, company, range } = frontmatter;

						return (
							<div
								id={`panel-${i}`}
								role="tabpanel"
							>
								<h3>
									<span>{title}</span>
									<span className="company">
										&nbsp;@&nbsp;
										<a href={url} className="inline-link">
											{company}
										</a>
									</span>
								</h3>

								<p className="range">{range}</p>

								<div dangerouslySetInnerHTML={{ __html: html }} />
							</div>
						);
					})}
			</div>
		</>
	)
}

export default Jobs;
