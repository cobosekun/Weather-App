FROM node:20-slim

# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの作成
WORKDIR /workspace

# デフォルトでbashを使う
SHELL ["/bin/bash", "-c"]
