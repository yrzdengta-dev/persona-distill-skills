#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SKILLS_DIR="$ROOT_DIR/skills"
TARGET_ROOT="${HOME}/.codex/skills"

usage() {
  cat <<'EOF'
Usage:
  bash scripts/install-skill.sh all
  bash scripts/install-skill.sh <skill-folder> [<skill-folder> ...]

Examples:
  bash scripts/install-skill.sh all
  bash scripts/install-skill.sh ict
  bash scripts/install-skill.sh fengxun senior-interviewer
EOF
}

extract_install_name() {
  local skill_file="$1"
  sed -n 's/^name:[[:space:]]*//p' "$skill_file" | head -n 1
}

install_one() {
  local folder="$1"
  local src_dir="$SKILLS_DIR/$folder"
  local skill_file="$src_dir/SKILL.md"

  if [[ ! -d "$src_dir" ]]; then
    echo "Unknown skill folder: $folder" >&2
    exit 1
  fi

  if [[ ! -f "$skill_file" ]]; then
    echo "Missing SKILL.md for: $folder" >&2
    exit 1
  fi

  local install_name
  install_name="$(extract_install_name "$skill_file")"

  if [[ -z "$install_name" ]]; then
    echo "Could not read frontmatter name from: $skill_file" >&2
    exit 1
  fi

  mkdir -p "$TARGET_ROOT/$install_name"
  cp "$skill_file" "$TARGET_ROOT/$install_name/SKILL.md"
  echo "Installed $folder -> $TARGET_ROOT/$install_name/SKILL.md"
}

main() {
  if [[ $# -lt 1 ]]; then
    usage
    exit 1
  fi

  mkdir -p "$TARGET_ROOT"

  if [[ "$1" == "all" ]]; then
    local folder
    for folder in "$SKILLS_DIR"/*; do
      [[ -d "$folder" ]] || continue
      install_one "$(basename "$folder")"
    done
    exit 0
  fi

  local folder
  for folder in "$@"; do
    install_one "$folder"
  done
}

main "$@"
