# omechu-server

## ⭐️ 브랜치(Branch) 컨벤션

1. **main** : 최종 배포를 위한 branch. Pull Request를 이용해 develope branch를 최종 merge
2. **develop** : 배포하기 전 개발 중일 때 각자의 브랜치에서 merge하는 브랜치 ( feature 브랜치나 refactor 브랜치 생성 후 PR 한 뒤 merge 는 무조건 **develop** 에 하기 )
3. **feat / #이슈 번호 / 기능명** : feature 브랜치. 새로운 기능 개발. 개발이 완료되면 develop 브랜치로 병합    ex)feat/#12/로그인 API 구현
4. **fix / #이슈 번호 / 기능명** : fix 브랜치. 생성 후 버그가 생겼을 때 수정하는 브랜치    ex)fix/#12/로그인 API 토큰 재발급
5. **refactor/#이슈 번호/기능명** : fix 브랜치. 생성 후 버그가 생겼을 때 수정하는 브랜치  ex)refactor/#12/로그인 API 수정

---

## ⭐️ 코딩(Coding) 컨벤션

### 네이밍 컨벤션

-   **변수 / 함수 / 메서드** : Camel Case(카멜 케이스)
-   **컴포넌트** : Pascal Case(파스칼 케이스)

### 들여쓰기 컨벤션

-   **들여쓰기** : Tab

### 주석 컨벤션

-   **한 줄 주석** : //
-   **여러 줄 주석** : /\*\*/

---

## ⭐️ 이슈(Issue) 컨벤션

### 제목 :

**[Feat] 이슈 제목**

-   **기능 추가 시** : **[feat]** 로그인 기능 추가
-   **오류/ 버그 발생 시** : **[fix]** 로그인 오류 수정
-   **리팩토링 시** : **[refactor]** 로그인 페이지 리팩토링

### 내용

-   **feat** 일때:
    -   **작업한 내용** : 작업한 기능 작성 ( 예시 : 로그인 )
-   **fix** 일때:
    -   **발생한 오류** :
    -   **작업할 방향** :
-   **refactor** 일때:    ( **refactor 한 부분은 review 잘 달아주기** )
    -   **내용** : 리팩토링이 필요한 부분 입력
    -   **리팩토링 이유** : 과거 와 현재를 비교해서 작성해주기
    -   **리팩토링 결과** : 변경한 내용 입력

## ⭐️ PR(Pull Request) 컨벤션

### PR 제목

[Feat/#이슈 번호] " pr message "
(예시 : [Feat/#1] "로그인 기능 추가")

### 📌 관련 이슈번호

(Closes 키워드가 있어야 PR이 머지되었을 때 이슈가 자동으로 닫힌다)

-   Closes #이슈 번호

### 📌 PR 유형

어떤 변경 사항이 있나요?

-   [ ] 새 기능 추가
-   [ ] 버그 수정
-   [ ] CSS 등 사용자 UI 디자인 변경
-   [ ] 리팩토링

### 📌 PR 요약

해당 PR을 간단하게 요약해 주세요

### 📌 작업 세부 내용

1.
2.
3.

### 📸 스크린샷 (선택)

### 🔗 참고 자료

​

---

## ⭐️ 커밋(Commit) 컨벤션

      [Feat]: 커밋 메시지 타입
      (git commit -m “[Feat/#이슈 번호]: "commit messages”")


      (예시: git commit -m "feat:"회원 가입 기능 구현"" )

-   **커밋 메시지 타입 종류**

1. **init** : 프로젝트 초기 생성 및 설정
2. **feat** : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
3. **fix** : 기능에 대한 버그 수정
4. **build** : 빌드 관련 수정
8. **refactor** : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
   
## 협업 규칙

### Github 협업 규칙

Github 협업 규칙은 아래와 같습니다.

1. 전체적인 협업 flow는 Github flow를 따름.
2. Fork한 저장소를 각자 local로 가져와 수정.
3. 수정한 코드는 add -> commit -> push 후, upstream에 Pull Request를 수행.
4. main branch로부터 dev branch, prod branch를 구성.
5. 추가되는 기능에 대해서는 feature branch를 생성하여 각 기능별 branch를 구성.
6. Pull Request 시 Code Review 이후 Merge 진행.( **2명**의 review 를 받은 후에 review 에 맞게 수정한 후에 각자 자신의 PR 을 develop 에 merge 시키기 )
7. Commit 규칙은 아래와 같이 진행했습니다.

   | 커밋 타입 | 설명                                                           |
      | --------- | -------------------------------------------------------------- |
   | feature   | 새로운 기능 구현                                               |
   | fix       | 수정                                                          |
   | refactor  | 리팩토링                                                       |

### Issue 활용
#### 이슈 작성 예시
#### ex) 제목 : [Feature] 로그인 API 개발
#### ex) 제목 : [Refactor] 로그인 API 수정
#### ex) 제목 : [Fix] 로그인 API 토큰 재발급 

- Github 레포지토리의 Issue탭에 Todo인 상황 혹은 In progress에 대한 상황을 작성하고 공유했습니다. 해당 Issue 번호로 각자의 로컬 레포지토리에 브랜치를 생성하여 Pull Request 시에 해당 Issue를 언급하여 공유했습니다. 해당 전략을 사용하여 Merge Conflict의 발생 가능성을 줄였습니다.

### PR 활용

- 다음과 같이 개발 이후 특정 프로젝트에 대한 변경사항을 제안하고, 팀원과 이를 검토 및 논의한 후, 최종적으로 해당 변경사항을 반영할 수 있도록 했습니다.
- 다른 개발자들은 해당 Pull Request를 검토하고, 필요한 경우 피드백을 제공할 수 있었습니다.
- 검토 후, Pull Request가 승인되면 변경 사항이 메인 프로젝트로 병합되도록 했습니다. 반면, 추가적인 수정이 필요한 경우 개발자는 피드백을 반영하여 수정하고, 수정된 변경사항을 다시 push 했습니다.
