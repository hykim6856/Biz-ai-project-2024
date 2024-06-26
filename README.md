# openAI 의 API 를 활용한 React 프로젝트

![alt text](image.png)

# openAI 키 설정

- 윈도우 검색창에서 `고급 시스템` 검색하여 입력 후 `고급 시스템 설정`, `시스템 설정`을 열기
- `환경변수` 클릭
- 시스템 변수에 키 입력하기

## openAI API 를 사용하기 위한 dependency 설정

- `npm install openai`

## git repository 문제 해결

- `root(AI_REACT)` 폴더를 local git repository 로 등록하지 않은 상태에서 `create-next-app` 또는 `create-react-app` 명령으로 프로젝트를 생성하면, 개별 프로젝트가 local git repository로 생성되어버린다.
- 이 상태에서 `root` 폴더에서 `git init` 를 실행하고, local git repository 로 생성하는 경우 새로 만들어진 프로젝트 폴더가 `github.com` 에 정상적으로 업로드 되지 않는다.
  이럴 때 먼저 새로 생성된 프로젝트 폴더에서 터미널을 열고 `rm -rf .git` 명령을 실행한다.
- 새로 생성된 프로젝트 폴더를 다른 이름으로 변경한다.
- 그리고 `root` 에서 다시 github 에 add, push등을 실행하면 정상적으로 프로젝트 폴더가 업로드된다.
