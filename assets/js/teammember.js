document.addEventListener(
	'DOMContentLoaded',
	function () {
		var teamMemberNameElement =
			document.getElementById('team-member-name');
		var teamMemberBioElement =
			document.getElementById('team-member-bio');
		var attrContentOne = document.getElementById(
			'attr-content-1'
		);
		var attrContentTwo = document.getElementById(
			'attr-content-2'
		);
		var attrContentThree = document.getElementById(
			'attr-content-3'
		);
		var skillbarWrapperElem =
			document.getElementById('skillbarWrapper');

		// Function to handle URL hash changes
		function handleHashChange() {
			var hash = window.location.hash.substring(1); // Remove the '#'
			if (hash) {
				// Simulate fetching data based on the hash
				var data = {
					shahbaz: {
						image: 'assets/images/shahbaz.jpg',
						name: 'Shahbaz Singh',
						role: 'Founder & Operations Manager',
						bio: `Shahbaz Singh is the founder and operations manager of TechBucket, a dynamic creative media agency.
                        Leveraging his extensive experience in project management and operations, he oversees the agency's daily functions, fostering a collaborative and efficient work environment`,
						attributes: [
							{
								title: 'Visionary',
								content: `A successful CEO in a design agency
                                should
                                have a clear vision.`,
							},
							{
								title: 'Strong Communication Skills',
								content: `A effective communication is essential for interaction.`,
							},
							{
								title: 'Business Acumen',
								content: `A strong understanding of business principles, finance, and marketing.`,
							},
						],
						skills: [
							{
								title: 'Problem Solving Skills',
								percentage: 95,
							},
							{
								title: 'Networking Skills',
								percentage: 83,
							},
							{
								title: 'Leadership Skills',
								percentage: 90,
							},
						],
					},
					gurnoor: {
						image: 'assets/images/gurnoor.jpg',
						name: 'Gurnoor Sapra',
						bio: `Gurnoor Sapra is the founder and business strategist of TechBucket, a dynamic creative media agency.
                        With a keen understanding of the market landscape and a passion for strategic thinking, Gurnoor crafts and implements comprehensive business plans that drive agency growth and success. His expertise lies in identifying and capitalizing on new opportunities, ensuring the agency stays ahead of the curve.`,
						attributes: [
							{
								title: 'Strategic Visionary',
								content: `Possesses a keen understanding of the market landscape and crafts impactful business strategies that drive agency growth and success.`,
							},
							{
								title: 'Data-Driven Decision Making',
								content: `Leverages data and market insights to inform strategic decisions, ensuring they are well-aligned with market trends and client needs.`,
							},
							{
								title:
									'Relationship Builder & Client Advocate',
								content: `Cultivates strong relationships with clients, acting as a trusted advisor and ensuring their needs are consistently met and exceeded.`,
							},
						],
						skills: [
							{
								title: 'Business Strategy',
								percentage: 80,
							},
							{
								title: 'Market Analysis & Insights',
								percentage: 90,
							},
							{
								title: 'Leadership & Mentorship',
								percentage: 95,
							},
						],
					},

					rajvir: {
						image: 'assets/images/rajvir.jpg',
						name: 'Rajvir Bheniwal',
						bio: `Rajvir Bheniwal is the task manager and project coordinator of TechBucket, a dynamic creative media agency.
                                            With a strong sense of responsibility and a knack for problem-solving, Rajvir oversees and executes various projects for the agency, ensuring they are delivered on time and within budget. His expertise lies in managing resources, communicating with stakeholders, and resolving issues.`,
						attributes: [
							{
								title: 'Responsible & Reliable',
								content: `Takes ownership of assigned tasks and ensures they are completed with high quality and efficiency.`,
							},
							{
								title: 'Problem-Solver & Troubleshooter',
								content: `Identifies and addresses potential risks and challenges that may arise during project execution, applying effective solutions and contingency plans.`,
							},
							{
								title: 'Collaborator & Communicator',
								content: `Works well with team members and clients, maintaining clear and timely communication and feedback throughout the project lifecycle.`,
							},
						],
						skills: [
							{
								title: 'Project Management',
								percentage: 85,
							},
							{
								title: 'Resource Allocation',
								percentage: 80,
							},
							{
								title: 'Stakeholder Engagement',
								percentage: 90,
							},
						],
					},
				};

				var teamMemberData = data[hash];
				console.log(teamMemberNameElement.name);
				if (teamMemberData) {
					console.log(teamMemberData);
					teamMemberNameElement.textContent =
						teamMemberData.name;
					teamMemberBioElement.textContent =
						teamMemberData.bio;
					attrContentOne.innerHTML = `<span>${teamMemberData.attributes[0].title}: </span>${teamMemberData.attributes[0].content}`;
					attrContentTwo.innerHTML = `<span>${teamMemberData.attributes[1].title}: </span>${teamMemberData.attributes[1].content}`;
					attrContentThree.innerHTML = `<span>${teamMemberData.attributes[2].title}: </span>${teamMemberData.attributes[2].content}`;
					skillbarWrapperElem.innerHTML = `
                    <div class="aximo-skillbar" data-percent="${teamMemberData.skills[0].percentage}">
                      <p class="aximo-skillbar-lable">
                        <span class="aximo-skill-bar-title">${teamMemberData.skills[0].title}:</span>
                        <span class="skill-bar-percent"></span>
                      </p>
                      <div class="aximo-skillbar-box">
                        <div class="skillbar-bar"></div>
                      </div>
                    </div>
                    <div class="aximo-skillbar" data-percent="${teamMemberData.skills[1].percentage}">
                      <p class="aximo-skillbar-lable">
                        <span class="aximo-skill-bar-title">${teamMemberData.skills[1].title}:</span>
                        <span class="skill-bar-percent"></span>
                      </p>
                      <div class="aximo-skillbar-box">
                        <div class="skillbar-bar"></div>
                      </div>
                    </div>
                    <div class="aximo-skillbar" data-percent="${teamMemberData.skills[2].percentage}">
                      <p class="aximo-skillbar-lable">
                        <span class="aximo-skill-bar-title">${teamMemberData.skills[2].title}:</span>
                        <span class="skill-bar-percent"></span>
                      </p>
                      <div class="aximo-skillbar-box">
                        <div class="skillbar-bar"></div>
                      </div>
                    </div>`;
				} else {
					window.location = '/errors-404.html';
					// Handle case where no data is found for the given hash
					teamMemberNameElement.textContent =
						'Team member not found';
					teamMemberBioElement.textContent =
						'No Description Found';
				}
			}
		}

		// Listen for hash changes
		window.addEventListener(
			'hashchange',
			handleHashChange
		);

		// Handle the initial state
		handleHashChange();
	}
);
