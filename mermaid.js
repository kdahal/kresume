graph TD
    %% Define styles
    classDef pipeline fill:#2DD4BF,stroke:#FFFFFF,stroke-width:2px,color:#1F2937;
    classDef security fill:#F97316,stroke:#FFFFFF,stroke-width:2px,color:#1F2937;
    classDef cultural fill:#6B7280,stroke:#FFFFFF,stroke-width:2px,color:#E5E7EB,stroke-dasharray: 5, 5;
    classDef startEnd fill:#10B981,stroke:#FFFFFF,stroke-width:2px,color:#1F2937;

    %% Start Node
    A((Start: MLOps Pipeline)):::startEnd --> B

    %% Data Ingestion & Preparation
    B[Data Ingestion & Preparation]:::pipeline --> C
    note1["
    **Security Measures**<br>
    - Robust Data Governance<br>
    - Data Encryption<br>
    - Access Controls & Anonymization<br>
    - Data Lineage & Versioning
    "]:::security
    B -->|""| note1

    %% Model Development & Experimentation
    C[Model Development & Experimentation]:::pipeline --> D
    note2["
    **Security Measures**<br>
    - Secure Coding Practices<br>
    - Vulnerability Scanning<br>
    - Environment Hardening<br>
    - Secrets Management
    "]:::security
    C -->|""| note2

    %% CI/CD Pipeline
    D[CI/CD Pipeline]:::pipeline --> E
    note3["
    **Security Measures**<br>
    - Automated Security Gates<br>
    - Immutable Infrastructure<br>
    - Container Security<br>
    - Model Versioning
    "]:::security
    D -->|""| note3

    %% Model Deployment & Serving
    E[Model Deployment & Serving]:::pipeline --> F
    note4["
    **Security Measures**<br>
    - Secure Deployment Practices<br>
    - Runtime Security Monitoring<br>
    - API Security<br>
    - Bias & Fairness Testing
    "]:::security
    E -->|""| note4

    %% Continuous Monitoring & Incident Response
    F[Continuous Monitoring & Incident Response]:::pipeline --> G
    note5["
    **Security Measures**<br>
    - Observability<br>
    - Anomaly Detection<br>
    - Threat Modeling<br>
    - Automated Incident Response
    "]:::security
    F -->|""| note5

    %% Feedback Loop
    F -->|Continuous Improvement| B

    %% End Node
    G((End: Secure MLOps Pipeline)):::startEnd

    %% Cultural Imperative
    subgraph Cultural_Imperative [Cultural Imperative]
        H["
        - Breaking Silos<br>
        - Security Champion Program<br>
        - Continuous Security Training<br>
        - Shared Responsibility
        "]:::cultural
    end
    H -.-> B
    H -.-> C
    H -.-> D
    H -.-> E
    H -.-> F
