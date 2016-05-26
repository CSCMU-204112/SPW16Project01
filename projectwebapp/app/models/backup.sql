--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: comment; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE comment (
    c_id integer NOT NULL,
    c_date text,
    c_data text,
    c_pid integer,
    c_no integer
);


ALTER TABLE public.comment OWNER TO postgres;

--
-- Name: login; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE login (
    id text,
    password text
);


ALTER TABLE public.login OWNER TO postgres;

--
-- Name: post; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE post (
    p_id integer NOT NULL,
    p_name text,
    p_date text,
    p_data text,
    id_no integer,
    p_type integer,
    p_like integer
);


ALTER TABLE public.post OWNER TO postgres;

--
-- Name: subcomment; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE subcomment (
    s_id integer NOT NULL,
    s_date text,
    s_data text,
    s_cid integer,
    s_no integer
);


ALTER TABLE public.subcomment OWNER TO postgres;

--
-- Name: type; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE type (
    t_id integer NOT NULL,
    t_name text
);


ALTER TABLE public.type OWNER TO postgres;

--
-- Name: user_id; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE user_id (
    id_no integer NOT NULL,
    id_fname text,
    id_lname text,
    id_email text
);


ALTER TABLE public.user_id OWNER TO postgres;

--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY comment (c_id, c_date, c_data, c_pid, c_no) FROM stdin;
\.


--
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY login (id, password) FROM stdin;
\.


--
-- Data for Name: post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY post (p_id, p_name, p_date, p_data, id_no, p_type, p_like) FROM stdin;
\.


--
-- Data for Name: subcomment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY subcomment (s_id, s_date, s_data, s_cid, s_no) FROM stdin;
\.


--
-- Data for Name: type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY type (t_id, t_name) FROM stdin;
\.


--
-- Data for Name: user_id; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY user_id (id_no, id_fname, id_lname, id_email) FROM stdin;
\.


--
-- Name: comment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (c_id);


--
-- Name: post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY post
    ADD CONSTRAINT post_pkey PRIMARY KEY (p_id);


--
-- Name: subcomment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY subcomment
    ADD CONSTRAINT subcomment_pkey PRIMARY KEY (s_id);


--
-- Name: type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY type
    ADD CONSTRAINT type_pkey PRIMARY KEY (t_id);


--
-- Name: user_id_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY user_id
    ADD CONSTRAINT user_id_pkey PRIMARY KEY (id_no);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

