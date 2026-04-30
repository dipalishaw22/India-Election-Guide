#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# ==========================================
# GCP Deployment Script for Election Assistant
# ==========================================

# 1. Set your Google Cloud Project ID
PROJECT_ID="your-gcp-project-id" # REPLACE THIS with your actual project ID
REGION="us-central1"             # Change if you prefer another region
SERVICE_NAME="election-assistant"

echo "Setting GCP Project to: $PROJECT_ID"
gcloud config set project $PROJECT_ID

# Ensure necessary APIs are enabled
echo "Enabling necessary GCP APIs (Cloud Build & Cloud Run)..."
gcloud services enable cloudbuild.googleapis.com run.googleapis.com

# 2. Deploy directly to Cloud Run
# This command automatically uses Cloud Build to build the Dockerfile in the current directory
# and deploys it to Cloud Run.
echo "Starting deployment to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --source . \
  --region $REGION \
  --allow-unauthenticated \
  --port 8080

echo "Deployment complete! 🎉"
