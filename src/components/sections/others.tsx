import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Icon } from "../icons";

const Others = () => {
	const data = useStaticQuery(graphql`
		{
		  others: allMarkdownRemark(
			filter: {
			  fileAbsolutePath: { regex: "/content/others/" }
			  frontmatter: { showInProjects: { ne: false } }
			}
			sort: { fields: [frontmatter___date], order: ASC }
		  ) {
			edges {
			  node {
				frontmatter {
				  title
				  desc
				  tech
				  github
				  external
				}
				html
			  }
			}
		  }
		}
	`);

	const [showMore, setShowMore] = useState<boolean>(false);

	const projects = data.others.edges.filter(({ node }: any) => node);
	const GRID_LIMIT = 6;
	const firstSix = projects.slice(0, GRID_LIMIT);
	const projectsToShow = showMore ? projects : firstSix;

	const projectInner = (node: any) => {
		const { frontmatter, html } = node;
		const { github, external, title, tech } = frontmatter;

		return (
			<div className="project-inner">
				<header>
					<div className="project-top">
						<div className="folder">
							<Icon name="Folder" />
						</div>
						<div className="project-links">
							{github && (
								<a
									href={github}
									aria-label="GitHub Link"
									target="_blank"
									rel="noreferrer">
									<Icon name="GitHub" />
								</a>
							)}
							{external && (
								<a
									href={external}
									aria-label="External Link"
									className="external"
									target="_blank"
									rel="noreferrer">
									<Icon name="External" />
								</a>
							)}
						</div>
					</div>

					<h3 className="project-title">
						<a href={external || github} target="_blank" rel="noreferrer">
							{title}
						</a>
					</h3>

					<div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
				</header>

				<footer>
					{tech && (
						<ul className="project-tech-list">
							{tech.map((tech: string, i: number) => (
								<li key={i}>{tech}</li>
							))}
						</ul>
					)}
				</footer>
			</div>
		)
	}

	return (
		<>
			<h2>Other Noteworthy Projects</h2>

			<ul className="projects-grid">
				{projectsToShow &&
					projectsToShow.map(({ node }: any, i: number) => (
						<div key={i}>{projectInner(node)}</div>
					))}
			</ul>
		</>
	)
}

export default Others;
