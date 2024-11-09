import os
import re
import pytest

# Run with pytest -v

# def check_title(note):
#     title_pattern = r'^## \s*(.+)'
#     return bool(re.search(title_pattern, note))

# def check_metadata(note):
#     metadata_pattern = r'^---\n.+\n---'
#     return bool(re.search(metadata_pattern, note))

# def check_description(note):
#     return 'Brief description of the concept.' in note

def check_sections(note):
    required_sections = [
        '## {{title}} Advantages',
        '## {{title}} Disadvantages',
        '%% wiki footer: Please don\'t edit anything below this line %%',
        '## This note in GitHub'
    ]
    return all(section in note for section in required_sections)

def check_footer_exists(note):
    return '%% wiki footer: Please don\'t edit anything below this line %%' in note

def check_positive_feedback_form_exists(note):
    return 'https://tally.so/r/mOaxjk?rating=Yes' in note

def check_negative_feedback_form_exists(note):
    return 'https://tally.so/r/mOaxjk?rating=No' in note

def check_url_in_feedback_form_no_spaces(note):
    # TODO: find url in note
    feedback_form_url = 'url=https://dataengineering.wiki/Tutorials/Tutorials)'
    return ' ' in feedback_form_url


def validate_note_structure(note_path):
    with open(note_path, 'r', encoding='utf-8') as file:
        note_content = file.read()
    
    return (
        # check_metadata(note_content) and
        # check_description(note_content) and
        # check_title(note_content) and
        check_footer_exists(note_content) and
        check_positive_feedback_form_exists(note_content) and
        check_negative_feedback_form_exists(note_content)
    )

def get_markdown_files(directories, exclude_files):
    markdown_files = []
    for directory in directories:
        for root, _, files in os.walk(directory):
            for filename in files:
                if filename.endswith('.md') and filename not in exclude_files:
                    markdown_files.append(os.path.join(root, filename))
    return markdown_files

directories_to_check = ['Tools', 'Tutorials']
excluded_files = []
markdown_files = get_markdown_files(directories_to_check, excluded_files)

@pytest.mark.parametrize("note_file", markdown_files)
def test_note_structure(note_file):
    assert validate_note_structure(note_file), f"Note structure invalid: {note_file}"
