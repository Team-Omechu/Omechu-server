# omechu-server

## 협업 규칙

### Github 협업 규칙

Github 협업 규칙은 아래와 같습니다.

1. 전체적인 협업 flow는 Github flow를 따름.
2. Fork한 저장소를 각자 local로 가져와 수정.
3. 수정한 코드는 add -> commit -> push 후, upstream에 Pull Request를 수행.
4. main branch로부터 dev branch, prod branch를 구성.
5. 추가되는 기능에 대해서는 feature branch를 생성하여 각 기능별 branch를 구성.
6. Pull Request 시 Code Review 이후 Merge 진행.
7. Commit 규칙은 아래와 같이 진행했습니다.

   | 커밋 타입 | 설명                                                           |
      | --------- | -------------------------------------------------------------- |
   | feature   | 새로운 기능 구현                                               |
   | fix       | 수정                                                          |
   | refactor  | 리팩토링                                                       |
   | docs      | 문서 수정                                                      |
   | style     | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                 |
   | chore     | 패키지 구조 수정, code와 무관한 부분들 (.gitignore, build.gradle 같은) 수정   |
   | hotfix    | hotfix                                                        |
   | remove    | 패키지나 클래스 삭제                                            |
   | test      | 테스트 코드, 리펙토링 테스트 코드 추가                           |
   | rename    | 패키지나 클래스명 수정                                          |
   | comment   | 주석 추가                                                      |

### Issue 활용
![image](https://github.com/user-attachments/assets/3c16e50a-9c5c-4457-8f0d-13b0f9e73788)

- Github 레포지토리의 Issue탭에 Todo인 상황 혹은 In progress에 대한 상황을 작성하고 공유했습니다. 해당 Issue 번호로 각자의 로컬 레포지토리에 브랜치를 생성하여 Pull Request 시에 해당 Issue를 언급하여 공유했습니다. 해당 전략을 사용하여 Merge Conflict의 발생 가능성을 줄였습니다.

### PR 활용
![image](https://github.com/user-attachments/assets/02656e24-d5d9-4e5b-a16b-925fd674cc53)

- 다음과 같이 개발 이후 특정 프로젝트에 대한 변경사항을 제안하고, 팀원과 이를 검토 및 논의한 후, 최종적으로 해당 변경사항을 반영할 수 있도록 했습니다.
- 다른 개발자들은 해당 Pull Request를 검토하고, 필요한 경우 피드백을 제공할 수 있었습니다.
- 검토 후, Pull Request가 승인되면 변경 사항이 메인 프로젝트로 병합되도록 했습니다. 반면, 추가적인 수정이 필요한 경우 개발자는 피드백을 반영하여 수정하고, 수정된 변경사항을 다시 push 했습니다.
