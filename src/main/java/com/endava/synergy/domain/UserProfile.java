package com.endava.synergy.domain;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A UserProfile.
 */
@Entity
@Table(name = "user_profile")
public class UserProfile implements Serializable {

    private static final long serialVersionUID = 1L;

    public enum Grades {

        JT("Junior Technician",  "JT",   0),
        TL("Technician",       "TL",   1),
        ST("Senior Technician",  "ST",   2),
        EN("Engineer",       "EN",   3),
        SE("Senior Engineer",  "SE",   4),
        CL("Consultant",       "CL",   5),
        SC("Senior Consultant",       "SC",   6);


        private final String full;
        private final String abbr;
        private final Integer code;

        private Grades(String full, String abbr, Integer code) {
            this.full = full;
            this.abbr = abbr;
            this.code = code;
        }

        public String getFullName() {
            return full;
        }

        public String getAbbreviatedName() {
            return abbr;
        }

        public Integer getCode(){
            return code;
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "grade")
    private String grade;

    @Column(name = "voice")
    private String voice;

    @Column(name = "discipline")
    private String discipline;

    @OneToOne
    @JoinColumn(unique = true)
    private User user;

    @OneToMany(mappedBy = "userProfile")
    private Set<Agenda> agenda = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "user_profile_season",
               joinColumns = @JoinColumn(name = "user_profile_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "season_id", referencedColumnName = "id"))
    private Set<Season> seasons = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "user_profile_tag",
               joinColumns = @JoinColumn(name = "user_profile_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private Set<Tag> tags = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGrade() {
        return grade;
    }

    public UserProfile grade(String grade) {
        this.grade = grade;
        return this;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getVoice() {
        return voice;
    }

    public UserProfile voice(String voice) {
        this.voice = voice;
        return this;
    }

    public void setVoice(String voice) {
        this.voice = voice;
    }

    public String getDiscipline() {
        return discipline;
    }

    public UserProfile discipline(String discipline) {
        this.discipline = discipline;
        return this;
    }

    public void setDiscipline(String discipline) {
        this.discipline = discipline;
    }

    public User getUser() {
        return user;
    }

    public UserProfile user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Agenda> getAgenda() {
        return agenda;
    }

    public UserProfile agenda(Set<Agenda> agenda) {
        this.agenda = agenda;
        return this;
    }

    public UserProfile addAgenda(Agenda agenda) {
        this.agenda.add(agenda);
        agenda.setUserProfile(this);
        return this;
    }

    public UserProfile removeAgenda(Agenda agenda) {
        this.agenda.remove(agenda);
        agenda.setUserProfile(null);
        return this;
    }

    public void setAgenda(Set<Agenda> agenda) {
        this.agenda = agenda;
    }

    public Set<Season> getSeasons() {
        return seasons;
    }

    public UserProfile seasons(Set<Season> seasons) {
        this.seasons = seasons;
        return this;
    }

    public UserProfile addSeason(Season season) {
        this.seasons.add(season);
        season.getUsers().add(this);
        return this;
    }

    public UserProfile removeSeason(Season season) {
        this.seasons.remove(season);
        season.getUsers().remove(this);
        return this;
    }

    public void setSeasons(Set<Season> seasons) {
        this.seasons = seasons;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public UserProfile tags(Set<Tag> tags) {
        this.tags = tags;
        return this;
    }

    public UserProfile addTag(Tag tag) {
        this.tags.add(tag);
        tag.getUsers().add(this);
        return this;
    }

    public UserProfile removeTag(Tag tag) {
        this.tags.remove(tag);
        tag.getUsers().remove(this);
        return this;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserProfile)) {
            return false;
        }
        return id != null && id.equals(((UserProfile) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "UserProfile{" +
            "id=" + getId() +
            ", grade='" + getGrade() + "'" +
            ", voice='" + getVoice() + "'" +
            ", discipline='" + getDiscipline() + "'" +
            "}";
    }
}
