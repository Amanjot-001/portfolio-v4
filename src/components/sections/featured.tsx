import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Featured = () => {
	const data = useStaticQuery(graphql`
		{
		  featured: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/content/featured/" } }
			sort: { fields: [frontmatter___date], order: ASC }
		  ) {
			edges {
			  node {
				frontmatter {
				  title
				  desc
				  cover {
					childImageSharp {
					  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
					}
				  }
				  tech
				  github
				  external
				  cta
				}
				html
			  }
			}
		  }
		}
	`);

	const featuredProjects = data.featured.edges.filter(({ node }: any) => node);

	return (
		<>
			<section id="projects">
				<h2 className="numbered-heading">Some Things I've Built</h2>

				<ul>
					{featuredProjects &&
						featuredProjects.map(({ node }: any, i: number) => {
							const { frontmatter, html } = node;
							const { external, title, tech, github, cover, cta } = frontmatter;
							const image = getImage(cover);
							return (
								<>
									<div className="project-content">
										<div>
											<p className="project-overline">Featured Project</p>

											<h3 className="project-title">
												<a href={external}>{title}</a>
											</h3>

											<div
												className="project-description"
												dangerouslySetInnerHTML={{ __html: html }}
											/>

											{tech.length && (
												<ul className="project-tech-list">
													{tech.map((tech: string, i: number) => (
														<li key={i}>{tech}</li>
													))}
												</ul>
											)}

											<div className="project-links">
												{cta && (
													<a href={cta} aria-label="Course Link" className="cta">
														Learn More
													</a>
												)}
												{github && (
													<a href={github} aria-label="GitHub Link">
														Github
													</a>
												)}
												{external && !cta && (
													<a href={external} aria-label="External Link" className="external">
														Link
													</a>
												)}
											</div>
										</div>
									</div>

									<div className="project-image">
										<a href={external ? external : github ? github : '#'}>
											<GatsbyImage image={image} alt={title} className="img" />
										</a>
									</div>
								</>
							)
						})}
				</ul>
			</section>

		</>
	)
}

export default Featured;
