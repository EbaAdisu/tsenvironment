import {
    Droplets,
    Globe,
    Leaf,
    MapPin,
    Shield,
    Volume2,
    Wind,
} from 'lucide-react'

export default function ConsultingPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Environment and Safety Consulting
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Comprehensive environmental and safety solutions for
                            sustainable development
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg leading-relaxed mb-8">
                                TS Environment is a private company established
                                to provide technical and consultancy services
                                related to environmental planning, natural
                                resource management, sustainability studies,
                                ESIA studies and climate change issues. We
                                provide straightforward, commercially aware and
                                technically robust advice to clients in the
                                Built Environment sector. We support investors,
                                developers, regulators, policy makers,
                                landowners and other stakeholders.
                            </p>

                            {/* ESIA Studies */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Globe className="mr-3 h-8 w-8" />
                                    ESIA Studies
                                </h2>
                                <p className="mb-4">
                                    A proposed developmental project is often
                                    challenges with its environmental and social
                                    impact as well as regulatory constraints. At
                                    TS Environment we understand these issues
                                    and acquired valuable experience in
                                    developing timely and cost-effective project
                                    plans, evaluative studies, sound engineering
                                    designs, effective stakeholder management,
                                    and successful permitting.
                                </p>
                                <p>
                                    Our team of experts had the experience in
                                    anticipating and addressing permit
                                    requirements early on in project design,
                                    they help implement a permitting strategy,
                                    development schedule, and mitigation plans
                                    that expedite permit acquisition and
                                    compliance. TS Environment draws on the
                                    skills and seamless delivery capability of
                                    our highly experienced approval and
                                    permitting processes, as well as our
                                    technical, engineering, planning, scientific
                                    and regulatory consulting staff–a number of
                                    whom have direct regulatory agency career
                                    experience.
                                </p>
                            </div>

                            {/* Biodiversity Study */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Leaf className="mr-3 h-8 w-8" />
                                    Biodiversity Study
                                </h2>
                                <p className="mb-4">
                                    We have a team of <em>biodiversity</em> and
                                    ecosystem services experts, focusing on
                                    practical solutions for managing{' '}
                                    <em>biodiversity</em> risk and achieving
                                    positive conservation outcome.
                                </p>
                                <p className="mb-4">
                                    Our biodiversity expert are over 10 years
                                    academic teaching, researching, designing
                                    and implementing science based studies for
                                    ecological investigations including
                                    sustainable use of renewable natural
                                    resources research work. This status allows
                                    them to conduct research and remain up to
                                    date with research in his field of
                                    expertise. We help our clients to achieve an
                                    ecologically sustainable basis for
                                    development, delivering practical solutions
                                    for managing biodiversity risk and achieving
                                    positive conservation outcomes.
                                </p>
                                <p className="mb-4">
                                    TS Environment&apos;s team is notable for
                                    hands-on biodiversity expertise developed
                                    through a broad range of backgrounds.
                                    Combining a clear biodiversity and ecosystem
                                    services focus with an in-depth
                                    understanding of private sector and
                                    government needs, we are ideally positioned
                                    to deliver innovative, pragmatic solutions
                                    to emerging biodiversity management
                                    challenges.
                                </p>
                                <p className="font-semibold mb-4">
                                    Our key areas of expertise are as follows:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4">
                                    <li>
                                        Baseline Studies and Protected Species
                                        Surveys
                                    </li>
                                    <li>Ecological Impact Assessments</li>
                                    <li>
                                        Planning, Regulatory Support, and
                                        Compliance
                                    </li>
                                    <li>
                                        Biodiversity Assessment and Offsetting
                                    </li>
                                    <li>Habitat Remediation and Management</li>
                                </ul>
                            </div>

                            {/* Water Resources */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Droplets className="mr-3 h-8 w-8" />
                                    Water Resources
                                </h2>
                                <p className="mb-4">
                                    We have a team of Hydrogeologists with over
                                    15 years of academic teaching, researching,
                                    designing and implementing science based
                                    studies for hydrogeology investigations.
                                </p>
                                <p className="mb-4">
                                    Our hydrologists have a wide experience as a
                                    Senior Hydrologist and Hydro geologist
                                    carrying out duties of surface and
                                    groundwater investigation, ground water
                                    feasibility studies, hydro-geophysical and
                                    environmental studies, and planning.
                                </p>
                                <p className="mb-4">
                                    Furthermore they have a broad experience on
                                    a variety of mega water Resources Projects,
                                    mainly Dams for Water Supply, Multipurpose,
                                    and Hydroelectric Projects, Power Plants, ,
                                    Pumping Stations, Flood Control Structures
                                    and including Environmental Impact
                                    Assessments of Hydroelectric Power Projects
                                    to an extent of controlling performance of
                                    mitigation measures design. Their experience
                                    not only limited to the above but also
                                    includes project screening, and ranking,
                                    design and supervision of Geological,
                                    Geotechnical and Hydro-geological
                                    investigations, sitting of project features
                                    and developing preliminary layouts and
                                    arrangements, technical training and
                                    technology transfer. Above all, their works
                                    include risk assessments, identification and
                                    evaluation of mitigation options and
                                    alternative project arrangements.
                                </p>
                                <p>
                                    We have also worked on development projects
                                    hydrological baseline studies using
                                    techniques endorsed by international
                                    institutions such as the World Bank, IMF
                                    (IFC PS 1 &6), United Nations, ICMM, ICMI
                                    and others.
                                </p>
                            </div>

                            {/* Acoustic Noise */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Volume2 className="mr-3 h-8 w-8" />
                                    Acoustic Noise
                                </h2>
                                <p className="mb-4">
                                    TS Environment experts provide consultancy
                                    advice, studies and assessments for a broad
                                    range of clients. We are experienced in
                                    acoustical consultants and have worked on a
                                    number of projects.
                                </p>
                                <p className="mb-4">
                                    The noise studies we produce usually involve
                                    a combination of noise measurements,
                                    predictive noise modeling and mitigation
                                    design. Using our in-depth understanding of
                                    noise and vibration control, we can provide
                                    a study or assessment to meet your needs.
                                </p>
                                <p className="font-semibold mb-4">
                                    Our services includes:
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4">
                                    <li>Acoustical Consulting</li>
                                    <li>
                                        Environmental Noise study and Impact
                                        Modeling
                                    </li>
                                    <li>
                                        Residential and commercial Noise level
                                        study and assessment
                                    </li>
                                    <li>Noise modeling</li>
                                    <li>Occupational Noise Study</li>
                                </ul>
                                <p>
                                    We employ internationally recognized
                                    acoustic modelling software packages to
                                    allow our acoustical consultants to evaluate
                                    noise for a variety of situations. With our
                                    extensive experience of real-life noise
                                    control applications, we feel we offer a
                                    service that can&apos;t be matched by others.
                                </p>
                            </div>

                            {/* Air Quality Study */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Wind className="mr-3 h-8 w-8" />
                                    Air Quality Study
                                </h2>
                                <p className="mb-4">
                                    TS Environment provides ambient air quality
                                    advice and services to clients across the
                                    East Africa. We offer an independent and
                                    personal service, and work with developers,
                                    planners and architects to get projects
                                    through the planning and permitting system.
                                    Our aim is to provide a cost effective, high
                                    quality air quality consultancy service to
                                    ensure the return of satisfied clients. TS
                                    Environment can provide you with: planning
                                    application support, environmental permit
                                    application support, air quality modelling,
                                    air quality monitoring, air quality
                                    assessment, and fugitive dust assessment.
                                </p>
                                <p className="mb-4">
                                    Our air quality team has experience with the
                                    assessment of impacts associated across all
                                    business sectors including: urban renewal
                                    and development (residential, industrial and
                                    retail), quarrying and mining,
                                    petrochemicals, transport and
                                    infrastructure, renewable energy, oil and
                                    gas, intensive agriculture, waste management
                                    and wastewater treatment.
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4">
                                    <li>Air quality monitoring</li>
                                    <li>
                                        Air quality modelling and assessment
                                    </li>
                                    <li>Air quality management</li>
                                </ul>
                                <p>
                                    With our specialist in-house expertise,
                                    members of the TS Environment air quality
                                    team are able to undertake a full
                                    compliance/best practice assessment of an
                                    existing installation or help to support
                                    planning decisions regarding new development
                                    and the impact of change of land-use.
                                </p>
                            </div>

                            {/* Archaeology & Heritage */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <MapPin className="mr-3 h-8 w-8" />
                                    Archaeology & Heritage
                                </h2>
                                <p className="mb-4">
                                    TS Environment provides specialist Cultural
                                    Heritage studies to clients across the East
                                    Africa. Our teams are senior professionals
                                    and researchers in the field of archaeology
                                    with over 10 years of experience. We have
                                    undertaken archaeological impact assessments
                                    of various projects to identify and mitigate
                                    possible impacts on sites of archaeological
                                    importance resulting from excavations
                                    project development.
                                </p>
                                <p className="mb-4">
                                    Tangible and intangible cultural heritage
                                    within any new economic development,
                                    infrastructure, commercial and construction
                                    projects shall be assessed in accordance to
                                    the International conventions requirements.
                                    TS Environment has well established
                                    experience and expertise in working with
                                    international agencies, multi-national
                                    companies, diverse cultures and ethnic
                                    groups and can assist with concept design,
                                    risk awareness, mediation, and damage
                                    prevention. International conventions
                                    require
                                </p>
                                <p className="mb-4">
                                    We have also carried out archaeological
                                    surveys, excavations and researches for
                                    several heritage sites to generate
                                    scientific data/information that can be
                                    utilized for the preparation and
                                    implementation of management plans for the
                                    cultural heritage sites
                                </p>
                                <ul className="list-disc list-inside space-y-2 mb-4">
                                    <li>
                                        Planning consultancy, expert witness and
                                        design advice
                                    </li>
                                    <li>
                                        EIA, Heritage Impact Assessment and
                                        assessment of settings
                                    </li>
                                    <li>
                                        Conservation Management Plans and
                                        Character Appraisals
                                    </li>
                                    <li>
                                        Geoarchaeology and analysis of
                                        conditions for preservation in situ
                                    </li>
                                    <li>
                                        Regeneration, community and cultural
                                        tourism projects
                                    </li>
                                    <li>
                                        Desk studies and negotiation with
                                        regulators
                                    </li>
                                    <li>
                                        Historic building recording and
                                        landscape surveys
                                    </li>
                                </ul>
                                <p>
                                    Site investigation, mitigation,
                                    interpretation and presentation
                                </p>
                            </div>

                            {/* Mapping, Surveying, Land Analysis, Project Planning */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <MapPin className="mr-3 h-8 w-8" />
                                    Mapping, Surveying, Land Analysis, Project
                                    Planning
                                </h2>
                                <p className="mb-4">
                                    TS Environment GIS team involved with GIS
                                    mapping and map based analysis utilizing the
                                    most up-to-date data and technology. Our
                                    staff can make information readily available
                                    to our clients by helping visualize spatial
                                    relationships, producing statistical data
                                    and determining environmental concerns. TS
                                    Environment has utilized this technology to
                                    assist clients with property acquisition,
                                    environmental management, project planning
                                    and development, and feasibility studies for
                                    a wide variety of projects, including
                                    mining, oil and gas, Environmental Baseline
                                    and impact studies, project feasibility
                                    studies, land cover studies, and topographic
                                    mapping.
                                </p>
                                <p>
                                    Our staff uses data collected by our survey
                                    team and publicly available through spatial
                                    database&apos;s. We integrate both survey data
                                    and spatial data using GIS software and
                                    AutoCad create maps and study trends for any
                                    project. The maps we produces meets our
                                    customers requirements of any planning and
                                    decision making.
                                </p>
                            </div>

                            {/* Environmental Management, Permitting & Compliance */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-green-700 mb-6 flex items-center">
                                    <Shield className="mr-3 h-8 w-8" />
                                    Environmental Management, Permitting &
                                    Compliance
                                </h2>
                                <p className="mb-4">
                                    TS Environment provide a comprehensive
                                    environmental management, permitting and
                                    compliance service to our clients. We
                                    support our clients in all areas of
                                    environmental management, including
                                    developing and maintaining integrated and
                                    discipline-specific management systems for
                                    environment, health & safety and energy that
                                    add value to businesses. We also help our
                                    clients secure waste and environmental
                                    permits, to enable them to effectively
                                    comply with regulatory requirements.
                                </p>
                                <p className="mb-4">
                                    TS Environment provides environmental
                                    management services to support our ranges of
                                    clients to all environmental compliance and
                                    to operate efficiently, aligning with the
                                    principles of a circular economy. We have
                                    proven expertise and experience in working
                                    with private and public organizations across
                                    a variety of sectors providing a broad range
                                    of technical and non-technical services.
                                </p>
                                <p className="font-semibold mb-4">
                                    Our expertise includes a wide spectrum of
                                    environmental issues related to air, water,
                                    and pollution prevention and control. We
                                    specialize in the following services areas
                                    to support your company&apos;s environmental
                                    operations:
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Permitting and Compliance Services</li>
                                    <li>Environmental Audits and review</li>
                                    <li>
                                        Program management and Management
                                        services
                                    </li>
                                    <li>Regulatory enforcement assistance</li>
                                    <li>
                                        Corporate Responsibility and Reporting
                                    </li>
                                    <li>Project feasibility studies</li>
                                    <li>
                                        Environmental and Sustainability
                                        Training
                                    </li>
                                    <li>
                                        Environmental liability assessments and
                                        financial assurance
                                    </li>
                                    <li>Resource Efficiency Services</li>
                                    <li>
                                        Resettlement planning and implementation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
